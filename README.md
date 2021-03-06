# unflatten

[![Version](https://img.shields.io/npm/v/o-unflatten.svg)](https://www.npmjs.com/package/o-unflatten)
[![Downloads](https://img.shields.io/npm/dt/o-unflatten.svg)](https://www.npmjs.com/package/o-unflatten)

Package for conversion from flat to nested objects

## Installation

```sh
npm install --save o-unflatten
```

## Usage

```javascript
const nodes = [
	{id: 1, parentId: 0},
	{id: 2, parentId: 0},
	{id: 3, parentId: 1},
	{id: 4, parentId: 1},
	{id: 5, parentId: 2},
	{id: 6, parentId: 4},
	{id: 7, parentId: 5}
];
const unflatten = require('o-unflatten');
const nested = unflatten(nodes);
console.log(nested);
```

### Input 

```javascript
const nodes = [
	{id: 1, parentId: 0},
	{id: 2, parentId: 0},
	{id: 3, parentId: 1},
	{id: 4, parentId: 1},
	{id: 5, parentId: 2},
	{id: 6, parentId: 4},
	{id: 7, parentId: 5}
];
```

### Output

```javascript
const nested = [
	{
    	"id": 1,
    	"parentId": 0,
    	"children": [
        	{
            	"id": 3,
            	"parentId": 1
        	},
        	{
            	"id": 4,
            	"parentId": 1,
            	"children": [
                	{
                    	"id": 6,
                    	"parentId": 4
                	}
            	]
        	}
    	]
	},
	{
    	"id": 2,
    	"parentId": 0,
    	"children": [
        	{
            	"id": 5,
            	"parentId": 2,
            	"children": [
                	{
                    	"id": 7,
                    	"parentId": 5
                	}
            	]
        	}
    	]
	}
];
```

### Tests

```sh
npm run test
```
