---
layout: post
title: "Het gebruik van matrixen"
author: Indy
tags: ["Matrixen"]
image: img/matrix.jpg
date: "2018-09-30T07:03:47.149Z"
draft: false
---

##Matrixen
>Dit in combinatie met Vectors zijn belangrijke elementen om een webgl deftig te laten uitvoeren.

__Het maken van een 2 dimensionale Matrix__:

Een matrix is een rij reële getallen die gerangschikt zijn in rijen en kolommen. Om aan te geven dat er sprake is van een matrix worden de tekens [ en ] of ( en ) gebruikt.
We gebruiken het om berekeningen te maken met vectors of met nummers. In dit voorbeeld gaan we aan de slag met 2x2 matrix.
Zoals bij een vector beginnen we met een constructor en een class.

```
/** Class representing a 2×2 matrix. */
export default class Matrix2 {
    /**
     * Create a 2×2 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0,
            0, 0,
        ]
    }
```

## Functionaliteiten
Net zoals bij vectoren zijn er ook functionaliteiten, alleen bereken wij hier de matrixen.

__add()__

De naam van de functie spreekt voor zich. Hier gaan wij de 2 waarden van elkaar optellen.

```
    add(b) {
        const a = this.elements
        this.elements = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }
```

__sub()__

Hier gaan wij de 2 waarden van elkaar aftrekken. 

```
   sub(b) {
        const a = this.elements
        this.elements = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }

```

__mul()__

Mul zorgt dat men matrixes kan vermenigvuldigen
Twee matrices vermenigvuldig je door steeds een rij van de eerste matrix met een kolom van de tweede matrix te vermenigvuldigen.

```
   mul(b) {
        const a = this.elements
        const c = []
        c[0] = a[0] * b[0] + a[1] * b[2]
        c[1] = a[0] * b[1] + a[1] * b[3]
        c[2] = a[2] * b[0] + a[3] * b[2]
        c[3] = a[2] * b[1] + a[3] * b[3]

        this.elements = c
    }
```


__rot()__

De rotatie functie zorgt ervoor dat men kan roteren rond elke vector die gegeven is.
```
       rot(α) {
        α *= Math.PI / 180
        const cos = Math.cos(α)
        const sin = Math.sin(α)
        const a = this.elements
        const r = [
            cos, -sin,
            sin, cos,
        ]
        this.elements = r
        this.mul(a);
    }
```
---
## Een overzicht van alle code bij elkaar.

``` /** Class representing a 2×2 matrix. */
export default class Matrix2 {
    /**
     * Create a 2×2 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0,
            0, 0,
        ]
    }

    /**
     * Addition of a matrix to the current matrix.
     * @param {Array} b - The second matrix.
     */
    add(b) {
        const a = this.elements
        this.elements = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }

    /**
     * Subtraction of a matrix from the current matrix.
     * @param {Array} b - The second matrix.
     */
    sub(b) {
        const a = this.elements
        this.elements = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }

    /**
     * Multiplication of the current matrix by another matrix.
     * @param {Array} b - The second matrix.
     */
    mul(b) {
        const a = this.elements
        const c = []
        c[0] = a[0] * b[0] + a[1] * b[2]
        c[1] = a[0] * b[1] + a[1] * b[3]
        c[2] = a[2] * b[0] + a[3] * b[2]
        c[3] = a[2] * b[1] + a[3] * b[3]

        this.elements = c
    }

    /**
     * Rotate the matrix around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        α *= Math.PI / 180
        const cos = Math.cos(α)
        const sin = Math.sin(α)
        const a = this.elements
        const r = [
            cos, -sin,
            sin, cos,
        ]
        this.elements = r
        this.mul(a);
    }
}
```