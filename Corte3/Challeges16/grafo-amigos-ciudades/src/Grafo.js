export class Graph {
    constructor() {
        this.nodes = [];
        this.nodeData = {};
        this.adjList = {};
    }

    addNode(id, type, data = {}) {
        if (!this.nodes.includes(id)) {
            this.nodes.push(id);
            this.nodeData[id] = { type, data };
            this.adjList[id] = [];
        }
    }

    addEdge(source, target) {
        if (this.adjList[source] && this.adjList[target]) {
            this.adjList[source].push(target);
            this.adjList[target].push(source);
        }
    }

    getPeopleInCity(cityName) {
        return this.adjList[cityName].filter(id => 
            this.nodeData[id].type === 'person'
        ).map(id => ({
            name: id,
            ...this.nodeData[id].data
        }));
    }

    getGraphData() {
        return {
            nodes: this.nodes.map(id => ({
                id,
                ...(this.nodeData[id].type === 'person' ? {
                    symbolType: 'circle',
                    color: '#4dabf7'
                } : {
                    symbolType: 'square',
                    color: '#69db7c'
                })
            })),
            links: this._generateLinks()
        };
    }

    _generateLinks() {
        const links = [];
        const added = new Set();
        
        this.nodes.forEach(source => {
            this.adjList[source].forEach(target => {
                const linkKey = [source, target].sort().join('-');
                if (!added.has(linkKey)) {
                    links.push({ source, target });
                    added.add(linkKey);
                }
            });
        });
        return links;
    }
}