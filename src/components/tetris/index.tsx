import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ATTACK_BAR, BOARD_HEIGHT, BOARD_WIDTH, BLOCK_SIZE } from '../../constants/tetris/constants';

const Tetris = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawBoardBackground = () => {
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;

    ctx.strokeStyle = '#555555';
    ctx.lineWidth = 1;
    ctx.translate(0.5, 0.5);

    // 가로 선
    for (let i = 0; i <= 20; i++) {
      ctx.moveTo(0, i * BLOCK_SIZE);
      ctx.lineTo(BOARD_WIDTH, i * BLOCK_SIZE);
    }

    // 세로 선
    for (let i = 0; i <= 10; i++) {
      ctx.moveTo(i * BLOCK_SIZE, 0);
      ctx.lineTo(i * BLOCK_SIZE, BOARD_HEIGHT);
    }

    ctx.stroke();
  };

  useEffect(() => {
    drawBoardBackground();
  }, []);

  return <Container ref={canvasRef} className="board" width={BOARD_WIDTH + ATTACK_BAR} height={BOARD_HEIGHT} />;
};

export default Tetris;

const Container = styled.canvas``;
