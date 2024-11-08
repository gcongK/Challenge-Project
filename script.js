
/*
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main_square');
    if (!canvas) {
        console.error('캔버스를 찾을 수 없습니다.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('캔버스 컨텍스트를 찾을 수 없습니다.');
        return;
    }

    // 기본 글꼴 설정 (폰트가 깨질 경우 시스템 폰트 사용)
    ctx.font = '10px SUIT-Regular, Arial, sans-serif'; 
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    // 출력할 텍스트
    const text = '도전하며 성장하는 미래\n여성 과학 인재의 요람\n덕성여대 디지털소프트웨어공학부 왜깨져씌앙';
    const lines = text.split('\n');
    const lineHeight = 36; // 줄 간격
    const xPosition = 20; // 텍스트 시작 위치 (왼쪽 여백)

    // 각 줄을 캔버스에 그리기
    lines.forEach((line, index) => {
        const yPosition = canvas.height / 2 - (lines.length - 1) * lineHeight / 2 + index * lineHeight;
        ctx.fillText(line, xPosition, yPosition);
    });
});
*/