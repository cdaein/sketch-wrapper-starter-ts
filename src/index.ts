import type {
  Sketch,
  SketchProps,
  SketchSettings,
} from "@daeinc/sketch-wrapper";
import sketchWrapper from "@daeinc/sketch-wrapper";

const sketch = ({ context: ctx }: SketchProps) => {
  return ({ width, height }: SketchProps) => {
    ctx.fillStyle = `#ccc`;
    ctx.fillRect(0, 0, width, height);
  };
};

const settings: SketchSettings = {
  dimensions: [1200, 1200],
  duration: 4_000,
};

sketchWrapper(sketch as Sketch, settings);
