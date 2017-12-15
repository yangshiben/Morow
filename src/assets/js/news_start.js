/**
 * Created by yangshibin on 2017/12/13.
 */
/*! egrethomepage - v1.0.0 - 2016-08-19 */
var curHost = window.location.protocol + '//' + window.location.host;
function initCanvas(a) {
  var b = a ? a: null,
    c = {},
    d = b.currentStyle ? b.currentStyle["padding-left"] : getComputedStyle(b, !1)["padding-left"],
    e = b.currentStyle ? b.currentStyle["padding-right"] : getComputedStyle(b, !1)["padding-right"],
    f = b.currentStyle ? b.currentStyle["padding-top"] : getComputedStyle(b, !1)["padding-top"],
    g = b.currentStyle ? b.currentStyle["padding-bottom"] : getComputedStyle(b, !1)["padding-bottom"];
  c.w = parseFloat(b.clientWidth) - parseFloat(d.slice(0, -2)) - parseFloat(e.slice(0, -2)),
    c.h = parseFloat(b.clientHeight) - parseFloat(f.slice(0, -2)) - parseFloat(g.slice(0, -2)),
    w = c.w,
    h = c.h;
  var i = document.createElement("canvas");
  document.createTextNode("您的浏览器不支持canvas");
  i.setAttribute("height", c.h),
    i.setAttribute("width", c.w),
    i.setAttribute("id", "canvas"),
    b.appendChild(i);
  var j = document.createElement("img");
  j.src = curHost + "img/homepage/dist/kv-bg-3.jpg",
    j.setAttribute("class", "img-responsive"),
    i.appendChild(j);
  var k = i.getContext("2d");
  return {
    ctx: k,
    canvas: i,
    stage: c
  }
}
function getElementLeft(a) {
  for (var b = a.offsetLeft,
         c = a.offsetParent; null !== c;) b += c.offsetLeft,
    c = c.offsetParent;
  return b
}
function getElementTop(a) {
  for (var b = a.offsetTop,
         c = a.offsetParent; null !== c;) b += c.offsetTop,
    c = c.offsetParent;
  return b
}
function onResize(a) {
  var b = a ? a: null;
  if (!a.lastChild) return null;
  var c = b.lastChild,
    d = {},
    e = b.currentStyle ? b.currentStyle["padding-left"] : getComputedStyle(b, !1)["padding-left"],
    f = b.currentStyle ? b.currentStyle["padding-right"] : getComputedStyle(b, !1)["padding-right"],
    g = b.currentStyle ? b.currentStyle["padding-top"] : getComputedStyle(b, !1)["padding-top"],
    h = b.currentStyle ? b.currentStyle["padding-bottom"] : getComputedStyle(b, !1)["padding-bottom"];
  d.w = parseFloat(b.clientWidth) - parseFloat(e.slice(0, -2)) - parseFloat(f.slice(0, -2)),
    d.h = parseFloat(b.clientHeight) - parseFloat(g.slice(0, -2)) - parseFloat(h.slice(0, -2)),
    c.setAttribute("height", d.h),
    c.setAttribute("width", d.w)
}
var _ua = navigator.userAgent.toLowerCase(),
  _isMobile = _ua.indexOf("mobile") != -1 || _ua.indexOf("android") != -1,
  num = 400,
  w = window.innerWidth,
  h = window.innerHeight,
  max = 100,
  speed = .02,
  _x = 0,
  _y = 0,
  _z = 80,
  canvas = document.getElementById("canv"),
  dtr = function(a) {
    return a * Math.PI / 180
  },
  rnd = function() {
    return Math.sin(Math.floor(360 * Math.random()) * Math.PI / 180)
  },
  dist = function(a, b, c) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2))
  },
  cam = {
    obj: {
      x: _x,
      y: _y,
      z: _z
    },
    dest: {
      x: 0,
      y: 0,
      z: 1
    },
    dist: {
      x: 0,
      y: 0,
      z: 10
    },
    ang: {
      cplane: 0,
      splane: 0,
      ctheta: 0,
      stheta: 0
    },
    zoom: 1,
    disp: {
      x: 0,
      y: 0,
      z: 0
    },
    upd: function() {
      cam.dist.x = cam.dest.x - cam.obj.x,
        cam.dist.y = cam.dest.y - cam.obj.y,
        cam.dist.z = cam.dest.z - cam.obj.z,
        cam.ang.cplane = -cam.dist.z / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z),
        cam.ang.splane = cam.dist.x / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z),
        cam.ang.ctheta = Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z),
        cam.ang.stheta = -cam.dist.y / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z)
    }
  },
  trans = {
    parts: {
      sz: function(a, b) {
        return {
          x: a.x * b.x,
          y: a.y * b.y,
          z: a.z * b.z
        }
      },
      rot: {
        x: function(a, b) {
          return {
            x: a.x,
            y: a.y * Math.cos(dtr(b.x)) - a.z * Math.sin(dtr(b.x)),
            z: a.y * Math.sin(dtr(b.x)) + a.z * Math.cos(dtr(b.x))
          }
        },
        y: function(a, b) {
          return {
            x: a.x * Math.cos(dtr(b.y)) + a.z * Math.sin(dtr(b.y)),
            y: a.y,
            z: -a.x * Math.sin(dtr(b.y)) + a.z * Math.cos(dtr(b.y))
          }
        },
        z: function(a, b) {
          return {
            x: a.x * Math.cos(dtr(b.z)) - a.y * Math.sin(dtr(b.z)),
            y: a.x * Math.sin(dtr(b.z)) + a.y * Math.cos(dtr(b.z)),
            z: a.z
          }
        }
      },
      pos: function(a, b) {
        return {
          x: a.x + b.x,
          y: a.y + b.y,
          z: a.z + b.z
        }
      }
    },
    pov: {
      plane: function(a) {
        return {
          x: a.x * cam.ang.cplane + a.z * cam.ang.splane,
          y: a.y,
          z: a.x * -cam.ang.splane + a.z * cam.ang.cplane
        }
      },
      theta: function(a) {
        return {
          x: a.x,
          y: a.y * cam.ang.ctheta - a.z * cam.ang.stheta,
          z: a.y * cam.ang.stheta + a.z * cam.ang.ctheta
        }
      },
      set: function(a) {
        return {
          x: a.x - cam.obj.x,
          y: a.y - cam.obj.y,
          z: a.z - cam.obj.z
        }
      }
    },
    persp: function(a) {
      return {
        x: a.x * cam.dist.z / a.z * cam.zoom,
        y: a.y * cam.dist.z / a.z * cam.zoom,
        z: a.z * cam.zoom,
        p: cam.dist.z / a.z
      }
    },
    disp: function(a, b) {
      return {
        x: a.x + b.x,
        y: -a.y + b.y,
        z: a.z + b.z,
        p: a.p
      }
    },
    steps: function(a, b, c, d, e) {
      var f = trans.parts.sz(a, b);
      return f = trans.parts.rot.x(f, c),
        f = trans.parts.rot.y(f, c),
        f = trans.parts.rot.z(f, c),
        f = trans.parts.pos(f, d),
        f = trans.pov.plane(f),
        f = trans.pov.theta(f),
        f = trans.pov.set(f),
        f = trans.persp(f),
        f = trans.disp(f, e)
    }
  }; !
  function() {
    "use strict";
    var a = function(a) {
      this.transIn = {},
        this.transOut = {},
        this.transIn.vtx = a.vtx,
        this.transIn.sz = a.sz,
        this.transIn.rot = a.rot,
        this.transIn.pos = a.pos
    };
    a.prototype.vupd = function() {
      this.transOut = trans.steps(this.transIn.vtx, this.transIn.sz, this.transIn.rot, this.transIn.pos, cam.disp)
    };
    var b = function() {
      this.vel = .01,
        this.lim = 360,
        this.diff = 600,
        this.initPos = 500,
        this.toX = _x,
        this.toY = _y,
        this.go()
    };
    b.prototype.go = function() {
      var a = document.getElementById("renderContainer"),
        b = initCanvas(a);
      this.canvas = b.canvas,
        cam.disp.x = .5 * b.stage.w,
        cam.disp.y = .5 * b.stage.h,
        cam.disp.z = 300,
        this.$ = b.ctx,
        this.$.globalCompositeOperation = "source-over",
        this.varr = [],
        this.dist = [],
        this.calc = [];
      for (var c = 0,
             d = num; c < d; c++) this.add();
      this.rotObj = {
        x: 0,
        y: 0,
        z: 0
      },
        this.objSz = {
          x: w / 5,
          y: h / 5,
          z: w / 5
        }
    },
      b.prototype.add = function() {
        this.varr.push(new a({
          vtx: {
            x: rnd(),
            y: rnd(),
            z: rnd()
          },
          sz: {
            x: 0,
            y: 0,
            z: 0
          },
          rot: {
            x: 20,
            y: -20,
            z: 0
          },
          pos: {
            x: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),
            y: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),
            z: this.diff * Math.sin(360 * Math.random() * Math.PI / 180)
          }
        })),
          this.calc.push({
            x: 360 * Math.random(),
            y: 360 * Math.random(),
            z: 360 * Math.random()
          })
      },
      b.prototype.upd = function() {
        cam.obj.x += .01 * (this.toX - cam.obj.x),
          cam.obj.y += .05 * (this.toY - cam.obj.y)
      },
      b.prototype.draw = function() {
        var a = this.$;
        a.clearRect(0, 0, this.canvas.width, this.canvas.height),
          cam.upd(),
          this.rotObj.x += speed,
          this.rotObj.y += speed,
          this.rotObj.z += speed;
        for (var b = navigator.userAgent,
               c = 0; c < this.varr.length; c++) {
          for (var d in this.calc[c]) this.calc[c].hasOwnProperty(d) && (this.calc[c][d] += this.vel, this.calc[c][d] > this.lim && (this.calc[c][d] = 0));
          if (this.varr[c].transIn.pos = {
              x: this.diff * Math.cos(this.calc[c].x * Math.PI / 180),
              y: this.diff * Math.sin(this.calc[c].y * Math.PI / 180),
              z: this.diff * Math.sin(this.calc[c].z * Math.PI / 180)
            },
              this.varr[c].transIn.rot = this.rotObj, this.varr[c].transIn.sz = this.objSz, this.varr[c].vupd(), !(this.varr[c].transOut.p < 0)) {
            var e = a.createRadialGradient(this.varr[c].transOut.x, this.varr[c].transOut.y, this.varr[c].transOut.p, this.varr[c].transOut.x, this.varr[c].transOut.y, 2 * this.varr[c].transOut.p);
            e.addColorStop(0, "hsla(255, 255%, 255%, 1)"),
              e.addColorStop(.5, "hsla(" + (c + 2) + ",85%, 40%,1)"),
              e.addColorStop(1, "hsla(" + c + ",85%, 40%,.5)"),
              a.fillStyle = e,
              b.indexOf("Firefox") >= 0 ? a.fillStyle = "#ffffcc": b.indexOf("compatible") > -1 && b.indexOf("MSIE") > -1 && !isOpera ? a.fillStyle = "#ffffcc": a.fillStyle = e,
              a.beginPath(),
              a.arc(this.varr[c].transOut.x, this.varr[c].transOut.y, 2 * this.varr[c].transOut.p, 0, 2 * Math.PI, !1),
              a.fill(),
              a.closePath()
          }
        }
      },
      b.prototype.anim = function() {
        window.requestAnimationFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(a, b) {
              window.setTimeout(a, 1e3 / 60)
            }
        } ();
        var a = function() {
          this.upd(),
            this.draw(),
            window.requestAnimationFrame(a)
        }.bind(this);
        window.requestAnimationFrame(a)
      },
      b.prototype.checkButtonSize = function(a, b) {
        var c = {
            up: .635869,
            down: .2826,
            left: .389,
            right: .389
          },
          d = {
            up: .62428,
            down: .2757,
            left: .337,
            right: .337
          },
          e = this.canvas.width,
          f = this.canvas.height;
        return e < 752 ? b > f * d.up && b < f * (1 - d.down) && a > e * d.left && a < e * (1 - d.right) ? 1 : 0 : b > f * c.up && b < f * (1 - c.down) && a > e * c.left && a < e * (1 - c.right) ? 1 : 0
      },
      b.prototype.run = function() {
        this.anim();
        var a = this,
          b = document.getElementById("renderContainer"),
          c = getElementLeft(b),
          d = getElementTop(b);
        window.onload = function() {
          var b = document.getElementById("renderContainer"),
            c = getElementLeft(b),
            d = getElementTop(b),
            e = document.getElementsByClassName("home-banner")[0];
          e.style.backgroundColor = "#000000",
            _isMobile ? window.addEventListener("deviceorientation",
              function(b) {
                var c = a.canvas.width / 2,
                  d = a.canvas.height / 2,
                  f = 2 * Math.PI / 360;
                a.toX = c * (1 - Math.cos(f * b.gamma)) * -.15,
                  a.toY = d * (1 - Math.cos(f * b.beta)) * .15;
                var g = c * (1 - Math.cos(f * b.gamma)) / (.5 * c),
                  h = d * (1 - Math.cos(f * b.beta)) * .02 + "px";
                e.style.backgroundPosition = 50 * g * 1.5 + "%" + 50 * h + "1.5%"
              },
              !1) : b.addEventListener("mousemove",
              function(f) {
                var g = window.pageXOffset + f.clientX - c,
                  h = window.pageYOffset + f.clientY - d;
                a.toX = (g - a.canvas.width / 2) * -.015,
                  a.toY = .015 * (h - a.canvas.height / 2);
                var i = (g - a.canvas.width / 2) / (a.canvas.width / 2),
                  j = (g - a.canvas.width / 2) / (a.canvas.width / 2),
                  k = (g - a.canvas.width / 2) * -Math.abs(i) * .025 + "px",
                  l = (h - a.canvas.height / 2) * Math.abs(j) * .05 + "px";
                e.style.backgroundPosition = k + " " + l,
                  a.checkButtonSize(g, h) ? b.style.cursor = "pointer": b.style.cursor = "default"
              }.bind(this))
        },
          b.addEventListener("touchstart",
            function(b) {
              var e = window.pageXOffset + b.targetTouches[0].clientX - c,
                f = window.pageYOffset + b.targetTouches[0].clientY - d;
              a.checkButtonSize(e, f) && (window.location = "products/engine.html")
            }.bind(this)),
          b.addEventListener("mousedown",
            function(b) {
              var e = window.pageXOffset + b.clientX - c,
                f = window.pageYOffset + b.clientY - d;
              a.checkButtonSize(e, f) && 1 == b.which && window.open("products/engine.html")
            }.bind(this))
      };
    var c = new b;
    c.run()
  } (),
  window.addEventListener("resize",
    function() {
      var a = document.getElementById("renderContainer");
      onResize(a)
    },
    !1);
