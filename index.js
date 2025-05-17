import { gameOfLife, cleanup } from "./src/gameOfLife.js";
import { initializeWebGPU } from "./src/utils/initializeWebGPU.js";

const selectElement = document.querySelector("#face-textures");

selectElement.addEventListener("change", async (event) => {
  cleanup();
  if (event.target.value === "game-of-life") {
    const device = await initializeWebGPU();
    const faces = document.querySelector(".cube").children;
    for (var i = 0; i < faces.length; i++) {
      await gameOfLife({ canvasId: faces[i].id, device });
    }
  }
});
