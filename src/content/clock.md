---
layout: post
title: "WebGl Clock"
author: Indy
tags: ["Getting Started"]
image: img/clock.jpg
date: "2013-01-20T15:11:55.000Z"
draft: false
---
## Het maken van een WEBGL Klok

Dit is een simpel voorbeeld van een eenvoudige anologe klok.


__Het maken van een canvas__

Om te beginnen importeren wij de vector2 die beschreven staat op [vector 2](vector.md).
We starten met een constructor die we volgende paramaters zullen meegeven: width, height, shaderSources.
In de constructor geven we al een paar zaken mee. 
We steken er ook een eventlistener in zodat als we indien op een knopje drukken, de klok zal starten en de canvas getekend zal worden.

```
export default class Canvas {
    constructor(width, height, shaderSources) {
        this.width = width
        this.height = height
        this.shaderSources = shaderSources

        this.colors = {
            black: [0, 0, 0, 0],
            blue: [0, 0, 255, 0],
            cyan: [0, 255, 255, 0],
            green: [0, 255, 0, 0],
            magenta: [255, 0, 255, 0],
            red: [255, 0, 0, 0],
            white: [255, 255, 255, 0],
            yellow: [255, 255, 0, 0],
        }
        this.data = {
            colors: [],
            positions: [],
        }

        this.gl = null
        this.program = null
        this.run()

        window.addEventListener('updateCanvas', event => {
            this.updateCanvasHandler(event)
        }, false);

    }

```
---
__De klok zelf__ 

We zorgen dat de canvas eerst leeg is zodat we geen vectoren hebben die er op blijven staan.

```
this.clearData()
```

Vervolgens voegen wij een witte punt toe, dit is het middelpunt waar rond men met de andere vectoren zal rond draaien.
Hier geven wij ook de x en y waarden mee als 0 zodat dit in het midden komt te staan.

``` 
  const w = new Vector2(0, 0)
        this.data.positions.push(w.x, w.y)
        this.data.colors.push(...this.colors.white)
```

vervolgens maken wij meerdere vectoren aan met de zelfde code maar veranderen we telkens de benaming van de const, de y-coordinaat en de kleur.

---
###De tijd en kleuren

Na het schrijven van de vectoren geven wij de tijd mee via de javascript new Date.`
Dit wordt gebruikt om de calculatie uit te voeren door de rotatie functie

```
const d = new Date()
        const Seconds = d.getSeconds()
        const Minutes = d.getMinutes()
        const Hours = d.getHours()
```

We geven ook een array mee met de verschillende kleuren, in dit geval gebruiken wij alleen maar het kleur wit.

``` 
  const colors = [
            'white',
        ]
```
---
###De rotatie functies

We maken een gebruik van een foreach functie om door alle kleuren te loopen. We maken ook gebruik van een calculatie om de tijd in de juiste richting te laten draaien en op de juiste plaats te laten gebruiken. Vervolgens pushen wij die positie door die dan op de canvas getoond worden.

```
        colors.forEach(color => {
            v.rot((Seconds* 6))
            this.data.positions.push(v.x, v.y)
            this.data.colors.push(...this.colors[color])
          

            m.rot((Minutes* 6))
            this.data.positions.push(m.x, m.y)
            this.data.colors.push(...this.colors[color])
            
            h.rot((Hours * 6 * 5) + (Minutes * 6 / 12 ) + (Math.PI / 180))
            this.data.positions.push(h.x, h.y)
            this.data.colors.push(...this.colors[color])
        });
```

### De canvas tekenen
 
Na alles roepen wij 1 malig de functie op om de canvas te tekenen, die vervolgens de klok zal tonen.

```
        this.drawScene()
```


---
## Een overzicht van alle code bij elkaar.

```
import Vector2 from './Math/Vector2.js'

/** Class representing a canvas element for WebGL2 */
export default class Canvas {
    constructor(width, height, shaderSources) {
        this.width = width
        this.height = height
        this.shaderSources = shaderSources

        this.colors = {
            black: [0, 0, 0, 0],
            blue: [0, 0, 255, 0],
            cyan: [0, 255, 255, 0],
            green: [0, 255, 0, 0],
            magenta: [255, 0, 255, 0],
            red: [255, 0, 0, 0],
            white: [255, 255, 255, 0],
            yellow: [255, 255, 0, 0],
        }
        this.data = {
            colors: [],
            positions: [],
        }

        this.gl = null
        this.program = null
        this.run()

        window.addEventListener('updateCanvas', event => {
            this.updateCanvasHandler(event)
        }, false);

    }

    updateCanvasHandler(event) {
        console.log('updateCanvas')
        this.clearData()

        // White point in the middle
        const w = new Vector2(0, 0)
        this.data.positions.push(w.x, w.y)
        this.data.colors.push(...this.colors.white)

        const v = new Vector2(0, .3)
        this.data.positions.push(v.x, v.y)
        this.data.colors.push(...this.colors.red)

        const m = new Vector2(0, .4)
        this.data.positions.push(m.x, m.y)
        this.data.colors.push(...this.colors.blue)

        const h = new Vector2(0, .5)
        this.data.positions.push(h.x, h.y)
        this.data.colors.push(...this.colors.cyan)

        const d = new Date()
        const Seconds = d.getSeconds()
        const Minutes = d.getMinutes()
        const Hours = d.getHours()
                    
      
        const colors = [
            'white',
        ]
       
        colors.forEach(color => {
            v.rot((Seconds* 6))
            this.data.positions.push(v.x, v.y)
            this.data.colors.push(...this.colors[color])
          

            m.rot((Minutes* 6))
            this.data.positions.push(m.x, m.y)
            this.data.colors.push(...this.colors[color])
            
            h.rot((Hours * 6 * 5) + (Minutes * 6 / 12 ) + (Math.PI / 180))
            this.data.positions.push(h.x, h.y)
            this.data.colors.push(...this.colors[color])
        });

        this.drawScene()
    }
```
