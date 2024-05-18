import { Object3D } from "../core/Object3D.ts";
import { Color32 } from "../math/Color32.ts";

class Light extends Object3D {
    constructor(color: Color32, intensity: number) {
        super();
        this.color = color;
        this.intensity = intensity;
        this.type = "Light";
        this.isLight = true;
    }

    dispose() {}

    copy(source: Light, recursive: boolean): Light {
        super.copy(source, recursive);

        this.color.copy(source.color);
        this.intensity = source.intensity;

        return this;
    }
}
export { Light };
