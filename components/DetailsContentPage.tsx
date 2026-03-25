import {Project} from "@/data/projects";
import ArrowLabel from "@/components/ArrowLabel";
import ArrowLabelFinding from "@/components/ArrowLabelFinding";

export default async function DetailsContentPage({ slug, project }: { slug: string, project: Project }) {
  return (
    <section className="bg-[#2C2B28] -mx-6 sm:-mx-12 md:-mx-[80px] lg:-mx-[115px] px-6 sm:px-12 md:px-[80px] lg:px-[115px] py-4 sm:py-8 md:py-12">

      {/* Cover image */}
      <div className="w-full rounded-2xl overflow-hidden border border-[#2F2F2F] mb-24">
        <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
      </div>

      {/* Background & Challenge */}
      {(project.background || project.challenge) && (
        <section className="mb-24 flex flex-col gap-16">
          {project.background && (
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
              <p className="font-geist font-light text-[20px] text-white/90 w-full sm:w-[40%] shrink-0">
                Background
              </p>
              <p className="font-geist font-light text-[30px] leading-[1.3] text-white/90">
                {project.background}
              </p>
            </div>
          )}
          {project.challenge && (
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
              <p className="font-geist font-light text-[20px] text-white/90 w-full sm:w-[40%] shrink-0">
                Challenge
              </p>
              <p className="font-geist font-light text-[30px] leading-[1.3] text-white/90">
                {project.challenge}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Key Findings */}
      {project.keyFindings && project.keyFindings.length > 0 && (
        <section className="mb-24">
          <h2 className="font-geist font-medium text-[60px] leading-[1.1] text-white mb-16">
            Key finding
          </h2>
          <div className="flex flex-col gap-16">
            {project.keyFindings.map((finding, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 sm:gap-0">
                <p className="font-geist font-light text-[20px] text-white/90 w-full sm:w-[40%] shrink-0">
                  {finding.label}
                </p>
                <p className="font-geist font-light text-[30px] leading-[1.3] text-white/90">
                  {finding.description}
                </p>
              </div>
            ))}
          </div>

          {project.findingImages && project.findingImages.length > 0 && (
              <div className={`mt-16 ${
                project.findingImages.length === 1
                  ? "flex justify-center"
                  : project.findingImages.length >= 3
                    ? "flex flex-wrap gap-6"
                    : ""
              }`}>

                {project.findingImages.length === 2 ? (
                  <>
                    {/* Mobile — empilées */}
                    <div className="flex flex-col gap-6 sm:hidden">
                      {project.findingImages.map((img, i) => (
                        <div key={i} className="overflow-hidden border border-[#2F2F2F] rounded-xl">
                          <img src={img} alt={`finding-${i}`} className="w-full h-auto object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* PC — superposées */}
                    <div className="relative w-full hidden sm:block h-[550px] md:h-[500px] lg:h-[850px]">

                      {/* Image 1 — haut gauche */}
                      <div className="absolute top-0 left-0 w-[55%] overflow-hidden border border-[#2F2F2F] z-10">
                        <img src={project.findingImages[0]} alt="finding-0" className="w-full h-auto object-cover" />
                      </div>
                      {/* Flèche à droite de la 1ère image */}
                      {project.findingLabels?.flow && (
                        <div className="absolute top-[40%] left-[57%] z-10">
                          <ArrowLabelFinding label={project.findingLabels.flow} direction="right" />
                        </div>
                      )}

                      {/* Image 2 — bas droite */}
                      <div className="absolute bottom-0 md:bottom-16 lg:bottom-16 right-0 w-[55%] overflow-hidden border border-[#2F2F2F] z-20">
                        <img src={project.findingImages[1]} alt="finding-1" className="w-full h-auto object-cover" />
                      </div>
                      {/* Flèche à gauche de la 2ème image */}
                      {project.findingLabels?.audit && (
                        <div className="absolute bottom-[30%] right-[57%] z-20">
                          <ArrowLabelFinding label={project.findingLabels.audit} direction="left" />
                        </div>
                      )}

                    </div>
                  </>
                ) : (
                  project.findingImages.map((img, i) => (
                    <div key={i} className="overflow-hidden border border-[#2F2F2F]">
                      <img src={img} alt={`finding-${i}`} className="w-full h-auto object-cover" />
                    </div>
                  ))
                )}
              </div>
          )}

        </section>
      )}

      {/* Key Results */}
      {project.keyResults && project.keyResults.length > 0 && (
        <section className="mb-24">
          <h2 className="font-geist font-medium text-[60px] leading-[1.1] text-white mb-16">
            Key results
          </h2>
          <div className="flex flex-col gap-16">
            {project.keyResults.map((result, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 sm:gap-0">
                <p className="font-geist font-light text-[20px] text-white/90 w-full sm:w-[40%] shrink-0">
                  {result.label}
                </p>
                <p className="font-geist font-light text-[30px] leading-[1.3] text-white/90">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          {project.wireframesImages && project.wireframesImages.length > 0 && (
              <div className="mt-16">
                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                  {project.wireframesImages.map((img, i) => (
                    <img key={i} src={img} alt={`wireframe-${i}`} className="rounded-xl object-cover w-full sm:w-auto" />
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <ArrowLabel label={project.wireframesLabel || "Wireframes"} />
                </div>
              </div>
          )}

          {project.prototypeImages && project.prototypeImages.length > 0 && project.prototypeType !== "video" && (
              <div className="mt-16">
                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                  {project.prototypeImages.map((img, i) => (
                    <img key={i} src={img} alt={`prototype-${i}`} className="rounded-xl object-cover w-full sm:w-auto" />
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <ArrowLabel label={project.prototypeLabel || "Prototype"} />
                </div>
              </div>
          )}

            {/* Prototype vidéo */}
            {project.prototypeType === "video" && project.prototypeVideo && (
              <div className="mt-16 w-full bg-black overflow-hidden flex items-center justify-center px-12 py-2 sm:py-4 md:py-12 lg:py-16">
                <video
                  src={project.prototypeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[500px] sm:h-[600px] md:h-[650px] lg:h-[750px] w-auto object-contain"
                />
              </div>
            )}
        </section>
      )}

    </section>
  );
}