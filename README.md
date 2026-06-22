# Sistema Cafetería Gourmet ☕


## 📑 Problema
Una cafetería permite a los clientes personalizar sus bebidas con múltiples ingredientes extras (leche, sirope, canela).  
Se necesita un diseño que permita calcular el costo y la descripción de forma dinámica, combinando ingredientes indefinidamente sin tener que crear una clase nueva para cada combinación posible.  
**Patrón aplicado:** Decorator.


## 💻 Solución
El sistema se implementa en TypeScript con:
- Interfaz `Bebida`
- Clase concreta `CafeSolo`
- Clase abstracta `AgregadoBebida`
- Decoradores concretos `AgregadoLeche` y `AgregadoSirope`
- Cliente `index.ts`


## 📊 Diagrama de Clases (Mermaid)

classDiagram
    class Bebida {
        <<Component>>
        +obtenerCosto() number
        +obtenerDescripcion() string
    }

    class CafeSolo {
        <<ConcreteComponent>>
        +obtenerCosto() number
        +obtenerDescripcion() string
    }

    class AgregadoBebida {
        <<Decorator>>
        -bebida : Bebida
        +obtenerCosto() number
        +obtenerDescripcion() string
    }

    class AgregadoLeche {
        <<ConcreteDecorator>>
        +obtenerCosto() number
        +obtenerDescripcion() string
    }

    class AgregadoSirope {
        <<ConcreteDecorator>>
        +obtenerCosto() number
        +obtenerDescripcion() string
    }

    Bebida <|.. CafeSolo
    Bebida <|.. AgregadoBebida
    AgregadoBebida <|-- AgregadoLeche
    AgregadoBebida <|-- AgregadoSirope
    AgregadoBebida --> Bebida : contiene
