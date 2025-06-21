import GradientWord from "./components/dynamic/GradientWord";
import GradientLink1 from "@/app/components/dynamic/GradientLink1";
import GradientLink2 from "@/app/components/dynamic/GradientLink2";
import ShadowImg from "./components/dynamic/ShadowImg";
import img1 from "@/public/imgs/start/gp3.avif";
import img2 from "@/public/imgs/start/gp2.avif";

export default function StartPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 lg:mt-10 m-8 lg:m-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Acerca de <GradientWord>Amawtay</GradientWord>
      </h1>

      <p className="mt-10 text-lg text-center max-w-4xl">
        El colectivo Amawtay concibe a la filosofía como un medio efectivo para
        ejercitar y ampliar el pensamiento, para hacer altos en el camino y
        redefinir rumbos, así como cuestionarse acerca de lo que somos y
        hacemos. Si se trabaja con periodicidad, permite mejorar la realidad,
        vida personal, laboral y transformar las relaciones con los otros. La
        dimensión crítica propia de la filosofía brinda una permanente
        confrontación del sí mismo, expansión y desarrollo de las
        potencialidades del individuo.
      </p>

      {/* Botones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10 w-full max-w-md">
        <GradientLink1
          href="#"
          className="w-full py-3 text-center"
          darkcolor="link-primary-dark"
          lightcolor="link-primary-light"
        >
          Agendar Consulta
        </GradientLink1>
        <GradientLink2
          href="#"
          className="w-full py-3 text-center"
          darkcolor="link-secondary-dark"
          lightcolor="link-secondary-light"
        >
          Colabora con nosotros
        </GradientLink2>
      </div>

      {/* Imágenes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-8 lg:m-14 w-full max-w-6xl">
        <ShadowImg
          src={img1}
          alt="imagen 1"
          width={600}
          height={800}
          className="rounded-lg w-full h-auto max-h-[400px] border shadow-lg"
        />
        <ShadowImg
          src={img2}
          alt="imagen 2"
          width={600}
          height={800}
          className="rounded-lg w-full h-auto max-h-[400px]  border shadow-lg"
        />
      </div>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-10 mx-auto w-full max-w-6xl px-4">
        <div className="p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-start">
          <h3 className="text-4xl lg:text-6xl tracking-wide">
            <GradientWord>Misión</GradientWord>
          </h3>
          <p className="mt-6 text-md">
            Somos un colectivo conformado por filósofos y filósofas que
            colaboran en conjunto para fomentar la filosofía en la sociedad
            latinoamericana. Su objetivo principal es acercar los temas de
            debate filosófico a audiencias más amplias, y desean desafiar la
            rigidez de las fronteras que a menudo impone la filosofía académica.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-start">
          <h3 className="text-4xl lg:text-6xl tracking-wide">
            <GradientWord>Visión</GradientWord>
          </h3>
          <p className="mt-6 text-md">
            Al 2025, el Centro Autónomo de Filosofía Amawtay aspira a ser una
            institución de producción y difusión filosófica latinoamericana, que
            lleve el quehacer filosófico a los diversos espacios de la sociedad,
            para participar en la formación de sujetos individuales y procesos
            comunitarios y sociales en un claro horizonte de humanización y buen
            vivir.
          </p>
        </div>
      </div>
    </div>
  );
}
