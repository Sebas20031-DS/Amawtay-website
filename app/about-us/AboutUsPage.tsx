import GradientWord from "../startpage/GradientWord";
import ShadowImg from "../components/dynamic/ShadowImg";

async function getData() {
  const res = await fetch("/aboutUsData.json"); // Replace with your API
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AboutUsPage() {
  const data = await getData();

  return (
    <div className="relative mt-5 lg:mt-10 border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          <GradientWord> Consultores </GradientWord>
        </h1>
        <div className="flex flex-wrap justify-center mt-5 lg:mt-10 gap-x-20 gap-y-3">
          {data.map((member, index) => (
            <div key={index} className="w-64 p-4 text-center">
              <img
                src={member.imagen}
                alt={member.nombre}
                className={`w-48 h-48 object-cover rounded-full mx-auto mb-4
                  ${
                    isDarkMode
                      ? "border-4 border-purple-700 shadow-lg shadow-purple-400"
                      : "border-4 border-[#3b63a9] shadow-lg shadow-blue-500"
                  }
                `}
              />

              <h2 className="text-xl font-semibold mt-2">
                {member.etiqueta ? `${member.etiqueta} ` : ""}
                {member.nombre}
              </h2>
              {/* Renderizamos los roles */}
              <div>
                {member.puestos.map((puesto, index) => (
                  <div key={index} className="mt-3">
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-purple-300" : "text-blue-700"
                      }`}
                    >
                      {puesto.cargo}
                    </p>
                    <p className="mt-1">{puesto.institucion}</p>
                  </div>
                ))}
              </div>
              {/* Renderizamos la educación si es necesario */}
              <div>
                {member.educacion.map((edu, index) => (
                  <div key={index} className="mt-3">
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-purple-300" : "text-blue-700"
                      }`}
                    >
                      {edu.grado}
                    </p>
                    <p className="mt-1">{edu.institucion}</p>
                  </div>
                ))}
              </div>
              {/* Correo */}
              <p
                className={`mt-4 ${
                  isDarkMode ? "text-purple-300" : "text-blue-700"
                }`}
              >
                {member.correo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
