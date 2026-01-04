import React, { useRef, useEffect } from "react";
import "./ConnectedDots.css"; // Yo'lni tekshiring

const ConnectedDots = () => {
  const canvasRef = useRef(null);
  const symbolsArray = useRef([]);
  const codeSymbols = ["<>", "{ }", "/", ";", "#", "()", "&&", "||", "=>"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createSymbols();
    };

    const createSymbols = () => {
      symbolsArray.current = [];
      // Ekran kattalashsa yoyilib ketmasligi uchun maydon bo'yicha hisoblaymiz
      const numSymbols = Math.floor((canvas.width * canvas.height) / 9000);

      for (let i = 0; i < numSymbols; i++) {
        const symbol =
          codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const fontSize = Math.random() * 6 + 10; // Kichik va chiroyli o'lcham
        symbolsArray.current.push(new CodeSymbol(x, y, symbol, fontSize));
      }
    };

    class CodeSymbol {
      constructor(x, y, text, fontSize) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.fontSize = fontSize;
        this.dx = (Math.random() - 0.5) * 0.5; // Sekin va mayin harakat
        this.dy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1; // Matnni o'qishga xalaqit bermaslik uchun pastroq
      }

      draw() {
        ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
        ctx.fillStyle = `rgba(205, 95, 248, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        // Ekran chetidan chiqib ketish va qarshi tomondan qaytib kirish
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;

        this.draw();
      }
    }

    const connect = () => {
      const maxDistance = 120;
      for (let a = 0; a < symbolsArray.current.length; a++) {
        for (let b = a; b < symbolsArray.current.length; b++) {
          let dx = symbolsArray.current[a].x - symbolsArray.current[b].x;
          let dy = symbolsArray.current[a].y - symbolsArray.current[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            let opacityValue = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(205, 95, 248, ${opacityValue * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(symbolsArray.current[a].x, symbolsArray.current[a].y);
            ctx.lineTo(symbolsArray.current[b].x, symbolsArray.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      symbolsArray.current.forEach((symbol) => symbol.update());
      connect();
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    animate();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="connected-dots-canvas"></canvas>;
};

export default ConnectedDots;
