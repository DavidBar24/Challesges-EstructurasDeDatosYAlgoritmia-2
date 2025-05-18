import { Graph } from 'react-d3-graph';

const GraphVisualizer = ({ data }) => {
    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: 'lightgreen',
            size: 800,
            labelProperty: 'id',
            fontSize: 12,
            highlightFontSize: 14,
            renderLabel: true
        },
        link: {
            highlightColor: 'lightblue',
            strokeWidth: 2
        },
        height: 600,
        width: 1000,
        directed: false
    };

    return <Graph
        id="graph-id"
        data={data}
        config={config}
    />;
};

export default GraphVisualizer;