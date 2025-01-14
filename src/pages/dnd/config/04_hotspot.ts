import { create } from '@stylexjs/stylex';
import type { DragData, DropData } from '.';

// ドラッグ要素のスタイル
const dragStyles = create({
    base: {
        top: 400,
        left: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'contain',
        backgroundImage: `url("/react_ui_comparison/04_hotspot.png")`,
        '::after': {
            content: '',
            backgroundColor: '#ff0000',
            position: 'absolute',
            top: 0,
            left: '50%',
            width: 2,
            height: 2,
            transform: 'translateX(-50%)',
        },
    },
    dragging: {},
});

// ドロップ要素のスタイル
const dropStyles = create({
    over: {
        borderColor: {
            '@media (prefers-color-scheme: light)': '#ccd3d9',
            '@media (prefers-color-scheme: dark)': '#ecf3f9',
        },
    },
});

// ドロップ要素
export const hotspot = {
    isOver: (props: DragData, dropRect: DOMRect) => {
        const { rect } = props;
        if (!rect) return false;
        const centerX = rect.x + rect.width / 2;
        const topY = rect.y;
        return (
            dropRect.left <= centerX &&
            dropRect.right >= centerX &&
            dropRect.top <= topY &&
            dropRect.bottom >= topY
        );
    },
    dragStyles,
    dropStyles,
} as const satisfies DropData;
