# 🎮 Animaciones 3D Interactivas con Three.js

Este proyecto consiste en una aplicación web que permite visualizar un personaje 3D con diferentes animaciones controladas mediante el teclado.

El sistema fue desarrollado utilizando **Three.js** para renderizar gráficos 3D en el navegador y animaciones descargadas desde **Mixamo** en formato FBX.

---

## 📸 Vista del proyecto

El sistema muestra:

- Un personaje 3D animado
- Escenario con iluminación y sombras
- Cámara interactiva
- Panel de controles con instrucciones de teclado

*(Aquí puedes agregar una captura de pantalla de tu proyecto)*

---

## 🚀 Demo

Puedes ver el proyecto en funcionamiento aquí:

🔗 https://tuusuario.github.io/nombre-del-repositorio/

---

## 🛠 Tecnologías utilizadas

- Three.js
- WebGL
- JavaScript (ES Modules)
- HTML5
- CSS3
- FBXLoader
- Modelos 3D FBX
- Animaciones de Mixamo

---

## 📂 Estructura del proyecto
project/
│
├── assets/
│ ├── build/
│ ├── css/
│ │ └── main.css
│ ├── js/
│ │ └── main.js
│ └── jsm/
│
├── models/
│ └── fbx/
│ ├── Arissa.fbx
│ ├── caminado.fbx
│ ├── golpe.fbx
│ ├── impacto.fbx
│ ├── agachado.fbx
│ └── aris.fbx
│
└── index.html

---

## 🎮 Controles del teclado

| Tecla | Acción |
|------|------|
| **1** | Animación de caminar |
| **2** | Animación de golpe |
| **3** | Animación de impacto |
| **4** | Animación agachado |
| **5** | Animación adicional |

Las animaciones se cambian dinámicamente presionando las teclas correspondientes.

---

## ⚙️ Funcionamiento del sistema

1. Se carga el modelo principal del personaje (`Arissa.fbx`).
2. Se inicializa un `AnimationMixer` para controlar las animaciones.
3. Las animaciones se cargan de forma independiente.
4. Cuando el usuario presiona una tecla, se activa la animación correspondiente.
5. Three.js renderiza la escena en tiempo real.

---

## ✨ Características

✔ Renderizado 3D en tiempo real  
✔ Control de animaciones mediante teclado  
✔ Iluminación y sombras en la escena  
✔ Cámara interactiva con OrbitControls  
✔ Interfaz con panel de controles  
✔ Animaciones cargadas dinámicamente  

---

## 💻 Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/tu-repositorio.git

### 2️⃣ Abrir el proyecto

Abrir la carpeta en **Visual Studio Code**

### 3️⃣ Ejecutar con Live Server

Puedes usar la extensión **Live Server** para correr el proyecto localmente.

---

## 📚 Recursos utilizados

- Documentación de Three.js
- Biblioteca de animaciones de Mixamo
- WebGL

---

## 👩‍💻 Autor

**Denise Campos**

Proyecto académico desarrollado para prácticas de desarrollo web 3D utilizando Three.js.

---

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.
