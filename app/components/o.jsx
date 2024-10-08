import { useEffect } from "react";

const OAnimation = () => {
  useEffect(() => {
    const colors = [
      "#e84a1d",
      "#ffed00",
      "#e30613",
      "#fbdad6",
      "#e6007e",
      "#291f5c",
      "#f0405c",
      "#0000ff",
      "#db78ad",
      "#d6cdc7",
      "#314d52",
      "#fff",
      "#000",
      "#cff200",
    ];

    class Controller {
      constructor() {
        this.oRoot = document.querySelector(".o-outer");
        this.bounds = this.getBounds();
        this.edges = this.getEdges();
        this.animating = true;
        this.os = [];
        this.animateInterval = undefined;
        this.fr = 30;

        window.addEventListener("resize", () => {
          this.bounds = this.getBounds();
        });

        this.animate(true);
      }

      addO() {
        this.os.push(new O(getRandomV(), this));
      }

      getBounds() {
        const rect = this.oRoot.getBoundingClientRect();
        return {
          x: [-1 * rect.x, window.innerWidth - rect.x - rect.width],
          y: [-1 * rect.y, window.innerHeight - rect.y - rect.height],
        };
      }

      getEdges() {
        const b = this.bounds;
        const thickness = 1000;

        return [
          {
            x: b.x[0],
            y: b.y[0] - thickness,
            height: thickness,
            width: window.innerWidth,
          },
          {
            x: b.x[1] + this.oRoot.clientWidth,
            y: b.y[0],
            height: window.innerHeight,
            width: thickness,
          },
          {
            x: b.x[0],
            y: b.y[1] + this.oRoot.clientHeight,
            height: thickness,
            width: window.innerWidth,
          },
          {
            x: b.x[0] - thickness,
            y: b.y[0],
            height: window.innerHeight,
            width: thickness,
          },
        ];
      }

      animate(on) {
        this.animating = on;
        if (on) {
          this.animateInterval = setInterval(() => {
            this.os.forEach((o) => o.step());
          }, 1000 / this.fr);
        } else {
          clearInterval(this.animateInterval);
        }
      }
    }

    class O {
      constructor(v, ctrl) {
        this.v = v;
        this.ctrl = ctrl;
        this.id = ctrl.os.length;
        this.create();
        this.aFactor = { x: 0.01, y: 1 };
        this.bounceFactor = { x: 0.9, y: 0.9 };
        this.a = { x: 0, y: 3 };
        this.pos = { x: 0, y: 0 };
        this.friction = false;
      }

      getDistance(pos1, pos2) {
        return Math.sqrt(
          Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2)
        );
      }

      create() {
        this.o = document.createElement("div");
        this.o.classList.add("o");
        this.o.style.backgroundColor =
          colors[Math.round(Math.random() * (colors.length - 1))];
        this.ctrl.oRoot.appendChild(this.o);

        const rect = this.o.getBoundingClientRect();
        this.height = rect.height;
        this.width = rect.width;

        this.o.addEventListener("click", (e) => {
          e.stopPropagation();
          this.v = getRandomV();
        });
      }

      checkCollide(obj, proj) {
        const pT = proj.y;
        const pR = proj.x + this.width;
        const pB = proj.y + this.height;
        const pL = proj.x;

        if (obj.pos) {
          const rad = this.width / 2;
          const oRad = obj.width / 2;
          return this.getDistance(obj.pos, proj) <= rad + oRad;
        } else {
          const oT = obj.y;
          const oR = obj.x + obj.width;
          const oB = obj.y + obj.height;
          const oL = obj.x;

          const collide = {
            t: pT <= oB,
            r: pB >= oT,
            b: pR >= oL,
            l: pL <= oR,
          };

          return collide.t && collide.r && collide.b && collide.l;
        }
      }

      collide(obj, proj, projV) {
        const t = this.pos.y;
        const r = this.pos.x + this.width;
        const b = this.pos.y + this.height;
        const l = this.pos.x;

        if (obj.pos) {
          const distance = this.getDistance(this.pos, obj.pos);
          const rad = this.width / 2;
          const oRad = obj.width / 2;
          const angle = Math.atan2(
            obj.pos.y - this.pos.y,
            obj.pos.x - this.pos.x
          );
          const collisionDistance = rad + oRad;

          let diffX = collisionDistance * Math.cos(angle);
          let diffY = collisionDistance * Math.sin(angle);

          proj = {
            x: obj.pos.x - diffX,
            y: obj.pos.y - diffY,
          };

          const vCollision = { x: obj.pos.x - proj.x, y: obj.pos.y - proj.y };
          const vCollisionNorm = {
            x: vCollision.x / distance,
            y: vCollision.y / distance,
          };
          const vRelativeVelocity = {
            x: projV.x - obj.v.x,
            y: projV.y - obj.v.y,
          };
          const speed =
            vRelativeVelocity.x * vCollisionNorm.x +
            vRelativeVelocity.y * vCollisionNorm.y;

          projV.x -= speed * vCollisionNorm.x * this.bounceFactor.x;
          projV.y -= speed * vCollisionNorm.y * this.bounceFactor.y;
          obj.v.x += speed * vCollisionNorm.x * obj.bounceFactor.x;
          obj.v.y += speed * vCollisionNorm.y * obj.bounceFactor.y;

          obj.pos.x += obj.v.x;
          obj.pos.y += obj.v.y;
        } else {
          const oT = obj.y;
          const oR = obj.x + obj.width;
          const oB = obj.y + obj.height;
          const oL = obj.x;

          const collide = {
            t: oB <= t,
            r: oL >= r,
            b: oT >= b,
            l: oR <= l,
          };

          if (collide.t || collide.b) {
            if (collide.b) {
              proj.y = oT - this.height;
            } else if (collide.t) {
              proj.y = oB;
            }
            this.friction = true;
            projV.y *= -1 * this.bounceFactor.y;
          }

          if (collide.l || collide.r) {
            if (collide.r) {
              proj.x = oL - this.width;
            } else if (collide.l) {
              proj.x = oR;
            }
            projV.x *= -1 * this.bounceFactor.x;
          }
        }

        return [proj, projV];
      }

      maybeCollide(proj, projV) {
        let colliding = true;
        let release = 100;
        while (colliding && release) {
          colliding = this.ctrl.os.find(
            (o) => this.id !== o.id && this.checkCollide(o, proj)
          );
          if (colliding) {
            [proj, projV] = this.collide(colliding, proj, projV);
          }
          this.ctrl.edges.forEach((e) => {
            if (this.checkCollide(e, proj)) {
              [proj, projV] = this.collide(e, proj, projV);
            }
          });
          release--;
        }

        this.v.x = projV.x;
        this.v.y = projV.y;

        this.pos.x = proj.x;
        this.pos.y = proj.y;
      }

      move() {
        this.maybeCollide(
          {
            x: this.pos.x + this.v.x,
            y: this.pos.y + this.v.y,
          },
          {
            x: this.v.x,
            y: this.v.y,
          }
        );

        this.o.style.top = this.pos.y + "px";
        this.o.style.left = this.pos.x + "px";
      }

      accelerate() {
        if (this.friction) {
          this.a.x = this.aFactor.x * this.v.x * -1;
          this.friction = false;
        }

        this.v.x += this.a.x;
        this.v.y += this.a.y;

        if (this.v.x < 0.01 && this.v.x > -0.01) {
          this.v.x = 0;
        }

        this.a.x = 0;
      }

      step() {
        this.accelerate();
        this.move();
      }
    }

    const getRandomV = () => {
      return {
        x: (Math.random() * 2 - 1) * Math.random() * 40 + 10,
        y: -1 * (Math.random() * 40 + 10),
      };
    };

    const ctrl = new Controller();
    const numOs = 20;

    setInterval(() => {
      ctrl.addO();
    }, 2000);

    return () => {
      clearInterval(ctrl.animateInterval); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <style>{`
        .o-outer,
        .o {
          width: 40px;
          height: 40px;
        }
        .o-outer {
          position: absolute;
          top: 50%;
          left: 0%;
          transform: translate(-50%, -50%);
        }
        .o {
          background: #cff200;
          border-radius: 100%;
          mask: radial-gradient(10px, #0000 98%, #000);
          -webkit-mask: radial-gradient(10px, #0000 98%, #000);
          position: absolute;
          cursor: pointer;
        }
        .edge {
          position: absolute;
          background: red;
          border: 1px solid red;
        }
      `}</style>
      <div className="o-outer"></div>
    </>
  );
};

export default OAnimation;
