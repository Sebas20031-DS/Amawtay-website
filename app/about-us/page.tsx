import aboutUsData from "./aboutUsData";
import GradientWord from "../components/dynamic/GradientWord";
import ShadowImg from "../components/dynamic/ShadowImg";
import TextColor from "./TextColors";

async function getData() {
  return aboutUsData;
}

export default async function AboutUsPage() {
  const data = await getData();

  return (
    <div className="mt-5 lg:mt-10 m-8 lg:m-10text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <GradientWord> Consultores </GradientWord>
      </h1>
      <div className="flex flex-wrap justify-center mt-5 lg:mt-10 gap-x-20 gap-y-5 m-10 p-10">
        {data.map((member, index) => (
          <div key={index} className="w-64 p-4 text-center ">
            <ShadowImg
              src={member.imagen}
              alt={member.nombre}
              width={300}
              height={400}
              className="border shadow-lg w-48 h-48 object-cover rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold mt-2">
              {member.etiqueta ? `${member.etiqueta} ` : ""}
              {member.nombre}
            </h2>

            {/* Renderizamos los roles */}
            <div>
              {member.puestos.map((puesto, index) => (
                <div key={index} className="mt-3">
                  <TextColor className="font-semibold">
                    {puesto.cargo}
                  </TextColor>
                  <p className="mt-1">{puesto.institucion}</p>
                </div>
              ))}
            </div>
            {/* Renderizamos la educación si es necesario */}
            <div>
              {member.educacion.map((edu, index) => (
                <div key={index} className="mt-3">
                  <TextColor className="font-semibold">{edu.grado}</TextColor>
                  <p className="mt-1">{edu.institucion}</p>
                </div>
              ))}
            </div>
            {/* Correo */}
            <TextColor className="font-semibold mt-4">
              {member.correo}
            </TextColor>
          </div>
        ))}
      </div>
    </div>
  );
}
