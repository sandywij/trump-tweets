export default function tooltip(node, text) {
    const tooltip = document.createElement('div');
    tooltip.textContent = text;
    Object.assign(tooltip.style, {
        position: 'absolute',
        background: 'black',
        color: 'white',
        padding: '0.5em 1em',
        fontSize: '12px',
        pointerEvents: 'none',
        transform: 'translate(5px, -50%)',
        borderRadius: '2px',
        transition: 'opacity 0.4s'
    });
    function append(event) {
        document.body.appendChild(tooltip);
        tooltip.style.opacity = 0;
        setTimeout(() => tooltip.style.opacity = 1);
        tooltip.style.top = `${event.pageY}px`;
        tooltip.style.left = `${event.pageX}px`;
    }
    function remove() {
        tooltip.remove();
    }
    node.addEventListener('mouseenter', append);
    node.addEventListener('mouseleave', remove);
    return {
        update(text) {
            tooltip.textContent = text;
            position();
        },
        destroy() {
            tooltip.remove();
            node.removeEventListener('mouseenter', append);
            node.removeEventListener('mouseleave', remove);
        }
    };
}
