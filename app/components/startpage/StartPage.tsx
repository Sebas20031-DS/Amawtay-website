import GradientWord from "./GradientWord";
import PrimaryLink from "../dynamic/PrimaryLink";
import SecondaryLink from "../dynamic/SecondaryLink";
import ShadowImg from "./ShadowImg";
import img from "@/public/imgs/ejp_img_light.jpg";

export default function StartPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 lg:mt-10 m-4 lg:m-8">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Acerca de <GradientWord>Amawtay</GradientWord>
      </h1>
      <p className={"mt-10 text-lg text-center max-w-4xl"}>
        El colectivo Amawtay concibe a la filosofía como un medio efectivo para
        ejercitar y ampliar el pensamiento, para hacer altos en el camino y
        redefinir rumbos, así como cuestionarse acerca de lo que somos y
        hacemos. Si se trabaja con periodicidad, permite mejorar la realidad,
        vida personal, laboral y transformar las relaciones con los otros. La
        dimensión crítica propia de la filosofía brinda una permanente
        confrontación del sí mismo, expansión y desarrollo de las
        potencialidades del individuo.
      </p>
      <div className="flex justify-center my-10 gap-6">
        <PrimaryLink href="#">Inscribete</PrimaryLink>
        <SecondaryLink href="#">Conoce más</SecondaryLink>
      </div>
      <div className="flex mt-5 justify-center m-4">
        <ShadowImg src={img} />
        <ShadowImg src={img} />
        <ShadowImg src={img} />
      </div>
      <div className="flex flex-row items-center justify-center mt-6 mb-6 lg:mt-10 space-x-7">
        <div className="p-3 rounded-lg shadow-lg text-center">
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

        <div className="p-3 rounded-lg shadow-lg text-center">
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
