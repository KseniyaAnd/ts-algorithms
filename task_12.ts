// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str: string): string{
    return str.replace(/-([a-z])/g, (_,c) => c.toUpperCase());
}

console.log(camelize("background-color"));