import GradientWord from "../components/dynamic/GradientWord";
import ShadowVideo from "../components/dynamic/ShadowVideo";

export default function ConsultingPage() {
  return (
    <div className="mt-10 m-2 mb-12 px-6 sm:px-10 lg:px-20 text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Consultoría <GradientWord>Filosófica</GradientWord>
      </h1>

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
    </div>
  );
}
