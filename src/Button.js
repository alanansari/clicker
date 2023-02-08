import {useState} from 'react';

const emojis = ['😄','😎','😘','😡','🐶','👿','🤖','😺','👺','🤠','😰','💖','🦄','🦜'];

export default function Button() {

    const [count,setCount] = useState(0);

    function randomEmoji() {
        const node = document.createElement("div");
        const textnode = document.createTextNode(emojis[Math.floor(Math.random() * 14)]);
        node.appendChild(textnode);
        node.setAttribute("class","emoji");
        node.style.top = Math.floor(Math.random() * 90) + 'vh';
        node.style.left = Math.floor(Math.random() * 95) + 'vw';
        document.getElementById('body').appendChild(node);
    }

    function handleClick(){
        setCount(count + 1);
        const n = 10;
        for(let i=0;i<n;i++)
        randomEmoji()
    }
  
    return (
      <button className='btn' onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }