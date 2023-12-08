"use client";

import { useState } from "react";
import { Button } from 'antd';

export default function Test() {
    const [count, setCount] = useState(1)

    const onClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <h2>ทดสอบการ Render และการใช้งาน useState: {count}</h2>
            <button onClick={onClick}>Click</button>
            <Button onClick={onClick}>Click antd</Button>
        </div>
    )
}