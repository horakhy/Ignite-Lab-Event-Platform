import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightbulb,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Loading } from "./Loading";

interface VideoProps {
  lessonSlug: string;
}
export const Video = (props: VideoProps) => {
  const { data, loading: isLoading } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  return (
    <div className="flex-1">
      {isLoading || !data?.lesson ? (
        <Loading />
      ) : (
        <>
          <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
              <Player>
                <Youtube
                  videoId={data?.lesson?.videoId}
                  poster="https://i.pinimg.com/originals/dd/ca/d9/ddcad9883c75387195140d0140aefbba.png"
                />

                <DefaultUi />
              </Player>
            </div>
          </div>

          <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{data?.lesson?.title}</h1>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {data?.lesson?.description}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-500 cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/horakhy", "_blank")
                    }
                    src={
                      data?.lesson?.teacher?.avatarURL ??
                      "https://i.pinimg.com/originals/dd/ca/d9/ddcad9883c75387195140d0140aefbba.png"
                    }
                    alt="horakhy image"
                  />
                  <div className="leading-relaxed">
                    <strong className="font-bold text-2xl block">
                      {data?.lesson?.teacher?.name ?? "Horakhy"}
                    </strong>
                    <span className="text-gray-200 text-sm block">
                      {data?.lesson?.teacher?.bio ?? "Greatest Programmer"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                >
                  <DiscordLogo size={24} />
                  Comunidade do Discord
                </a>
                <a
                  href="#"
                  className="p-4 text-sm text-blue-500 border border-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
                >
                  <Lightbulb size={24} />
                  Acesse o desafio
                </a>
              </div>
            </div>
            <div className="gap-8 mt-20 grid grid-cols-2">
              <a
                href=""
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 hover:transition-all transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={20} />
                </div>
                <div className="flex flex-col py-6 leading-relaxed justify-center items-center">
                  <strong className="text-2xl">Material complementar</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Acesse o material complementar para acelerar o seu
                    desenvolvimento
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight />
                </div>
              </a>
              <a
                href=""
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={20} />
                </div>
                <div className="flex flex-col py-6 leading-relaxed justify-center items-center">
                  <strong className="text-2xl">Wallpapers</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Baixe wallpapers exclusivos do Ignite Lab e personalize a
                    sua máquina
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight />
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
