import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LogPlotter = () => {

    const [data] = useState([25, 50, 35, 15, 94, 10]);
    const svgRef = useRef();

    useEffect(() => {

    }, [data]);

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default LogPlotter;