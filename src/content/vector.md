---
layout: post
title: "WEBGL: Vectoren"
author: Indy
tags: ["Vectoren"]
image: img/program1.jpg
date: "2018-05-06T23:46:37.121Z"
draft: false
---

__Het maken van de juiste mapstructuur__:

Om een correcte orde te krijgen in de files is het best aan te raden deze mappenstructuur te gebruiken zodat je in de files op een eenvoudige manier kan linken naar elkaar.
```├── assets
        ├── css
            ├── main.css
        ├── glsl
        ├── js
            ├── Library
                ├── Math
                    ├── Vector2.js
            ├── Tests.js
            ├── Application.js
            ├── main.js
    ├── index.html
```


## Vectors
Open Vector2.js in Math.
>In verdere notities zal je de vectoren functionaliteiten uitgelegd zien.

__Het maken van een 2 dimensionale vector__:

We starten met een constructor en class aan te maken, de class wordt Vector2 genoemd. (Dit zodat we later efficienter kunnen weten met welke vector we bezig zijn)
In de constructor geven wij de parameters mee xpos en ypos, die in de constructor worden gelijkgesteld met de x en de y coordinaten.

```
export default class Vector2 {
	constructor(xpos, ypos) {
		this.x = xpos
		this.y = ypos
	}

	...
}
```

## Functionaliteiten

__add()__

De naam van de functie spreekt voor zich. Hier gaan wij de x en de y coordinaten toevoegen aan elkaar. We geven in de parameter v mee zodat we weten dat we met een vector bezig zijn.

```
add(v) {
        this.x += v.x
        this.y += v.y
    }
```

__sub()__

Hier gaan wij de 2 coordinaten van elkaar aftrekken. Ook hier geven we in de paramater v weer mee.

```
 sub(v) {
        this.x -= v.x
        this.y -= v.y
    }
```

__scalar()__

Scalar maakt het mogelijk om meerdere vectoren te vermenigvuldigen. In plaats van een vector toe te voegen als parameter, geven wij een integer mee genaamd 'a'.

```
 scalar(a) {
        this.x *= a
        this.y *= a
    }
```

__norm()__

Door behulp van de vierkantswortel te nemen van de x en y coordinaat kan men de lengte berekenen van een vector.

```
  norm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
```

__dot()__

Dot retourneert het dotproduct van twee vectoren.
Hier geven wij in de parameter 'v' mee, om aan te tonen dat het om een vector gaat.

``` 
  dot(v) {
        return this.x * v.x + this.y * v.y
    }
```

__rot()__

Om het mogelijk te maken van deze functie plaatsen wij voor de export default class een import naar de matrix2.

``` 
import Matrix2 from './Matrix2.js'
export default class Vector2 {
	constructor(xpos, ypos) {
		this.x = xpos
		this.y = ypos
	}

	...
}
```


De rotatie functie zorgt ervoor dat de vector zal roteren rond de opgegeven positie.
```
    rot(α) {
        const m = new Matrix2([this.x, this.y])
        m.rot(α)
        this.x = m.elements[0]
        this.y = m.elements[1]
    }
```
---
## Een overzicht van alle code bij elkaar.

``` 
import Matrix2 from './Matrix2.js'

/** Class representing a two-dimensional vector. */
export default class Vector2 {
    /**
     * Create a vector.
     * @param {Number} x - The horizontal vector component.
     * @param {Number} y - The vertical vector component.
     */
    constructor(x, y) {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
    }

    /**
     * Calculate the length of the vector.
     * @return {Number} The length of the vector
     */
    norm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    /**
     * Addition of a vector to the current vector.
     * @param {Vector2} v - The second vector.
     */
    add(v) {
        this.x += v.x
        this.y += v.y
    }

    /**
     * Subtraction of a vector from the current vector.
     * @param {Vector2} v - The second vector.
     */
    sub(v) {
        this.x -= v.x
        this.y -= v.y
    }

    /**
     * Scalar multiplication. Multiplies a vector by a scalar.
     * @param {Number} a - The scalar value.
     */
    scalar(a) {
        this.x *= a
        this.y *= a
    }

    /**
     * Calculate the dot product of the current vector and another vector.
     * @param {Vector2} v - The second vector.
     * @return {Number} the dot product of the wzo
     */
    dot(v) {
        return this.x * v.x + this.y * v.y
    }

    /**
     * Rotate the vector around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        const m = new Matrix2([this.x, this.y])
        m.rot(α)
        this.x = m.elements[0]
        this.y = m.elements[1]
    }
}
```