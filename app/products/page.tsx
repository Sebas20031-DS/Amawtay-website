import GradientWord from "../components/dynamic/GradientWord";
import ShadowVideo from "../components/dynamic/ShadowVideo";
import TextColor from "../components/dynamic/TextColors";
import GradientLink1 from "../components/dynamic/GradientLink1";
import ShadowImg from "../components/dynamic/ShadowImg";
import img1 from "@/public/imgs/ejp_img_light.jpg";

export default function ConsultingPage() {
  return (
    <div className="mt-10 m-2 mb-16 px-6 sm:px-10 lg:px-20 text-center">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Consultoría <GradientWord>Filosófica</GradientWord>
      </h2>

      {/* SECCIÓN CONSULTORÍA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-14 items-center">
        <div className="w-full aspect-video max-w-2xl mx-auto">
          <ShadowVideo
            src="/videos/filosofia.mp4"
            width={800}
            height={450}
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="flex flex-col justify-center text-left px-4 lg:px-10 text-lg leading-relaxed">
          <p>
            El Centro Autónomo de Filosofía Amawtay cultiva la filosofía
            práctica para el “buen vivir”. Esto legitima nuestra intención de
            recuperar la filosofía como “modo de vida”, como instrumento
            racional para el cuidado del “sí mismo” y, por otra parte, el
            afrontar problemas existenciales con miras a la transformación del
            individuo.
          </p>
        </div>
      </div>

      {/* SECCIÓN CURSOS */}
      <div className="max-w-7xl mx-auto mt-12 text-center lg:mt-24 p-2">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide mb-12">
          <GradientWord>Cursos</GradientWord>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left px-4 sm:px-8">
          {/* Imagen o elemento visual */}
          <div className="w-full aspect-square max-w-md mx-auto">
            <ShadowImg
              src={img1}
              alt="imagen 1"
              width={600}
              height={800}
              className="rounded-lg w-full h-auto max-h-[400px] border shadow-lg"
            />
          </div>

          {/* Contenido del curso */}
          <div className="text-lg leading-relaxed">
            <TextColor className="text-2xl font-semibold mb-4">
              <p className="text-2xl font-semibold mb-4">
                Filosofía práctica: comprensión del sí mismo
              </p>
            </TextColor>

            <h4 className="text-1xl font-semibold mb-4">
              Objetivos de aprendizaje:
            </h4>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Distinguir los conceptos básicos de la filosofía del sí mismo.
              </li>
              <li>
                Emplear herramientas para el trabajo con el sí mismo desde la
                filosofía práctica.
              </li>
            </ul>

            <h3 className="text-1xl font-semibold mb-4">Contenido:</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Historia de vida</li>
              <li>La alegoría - representación</li>
              <li>Claridad conceptual</li>
              <li>La comparación - analogía</li>
              <li>Filosofía práctica: comprensión del sí mismo</li>
            </ul>

            <p className="mt-4 text-base text-muted-foreground">
              *Los cursos se abren según el nivel de interés y disponibilidad
              del equipo docente.
            </p>

            <div className="mt-8 flex justify-center">
              <GradientLink1
                href="#"
                className="py-3 text-center"
                darkcolor="link-primary-dark"
                lightcolor="link-primary-light"
              >
                Estoy Interesado
              </GradientLink1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
