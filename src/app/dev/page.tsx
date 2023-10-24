import fs from "fs";

export default function Debug() {
  const files = fs.readdirSync("./src/app/_components/decals");


  return <div className="grid grid-cols-2 gap-4">
    {files.map((file, idx) => {
      const name = file.replace("Decal.tsx", "");
      const Component = require(`@components/decals/${name}/${name}Decal`).default;

      return <div key={idx}>
        <h3>{name}</h3>
        <Component color="orange" className="w-[350px] h-[350px] relative" />
      </div>
    })}
  </div>
}
