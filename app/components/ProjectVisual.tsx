import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "../data";

/**
 * Project thumbnail: the project's screenshot in a browser frame when it has
 * an `image`, otherwise a stylised mock-up in the project's colours.
 */
export default function ProjectVisual({ project }: { project: Project }) {
  const style = { "--accent": project.accent, "--tint": project.tint } as CSSProperties;

  if (project.image) {
    return (
      <div className="pv pv-shot" style={style}>
        <div className="pv-bar">
          <i />
          <i />
          <i />
          <em className="pv-url">{project.href?.replace(/^https:\/\/(www\.)?/, "") ?? project.slug}</em>
        </div>
        <div className="pv-shot-img">
          <Image
            src={project.image}
            alt={`${project.name} homepage`}
            fill
            sizes="(max-width: 767px) 100vw, 40vw"
          />
        </div>
        {project.kind === "mobile" && <div className="pv-badge">★ 4.3 · 1,000+ downloads</div>}
      </div>
    );
  }

  if (project.kind === "mobile") {
    return (
      <div className="pv" style={style} aria-hidden="true">
        <div className="pv-phone pv-phone-2">
          <div className="pv-screen">
            <div className="pv-screen-head">Escrow</div>
            <div className="pv-screen-grid">
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="pv-phone">
          <div className="pv-screen">
            <div className="pv-screen-head">{project.name}</div>
            <div className="pv-screen-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="pv-badge">★ 4.3 · 1,000+ downloads</div>
      </div>
    );
  }

  return (
    <div className="pv" style={style} aria-hidden="true">
      <div className="pv-browser">
        <div className="pv-bar">
          <i />
          <i />
          <i />
          <em className="pv-url">{project.href?.replace("https://", "") ?? project.slug}</em>
        </div>
        <div className="pv-body">
          <div>
            <div className="pv-name">{project.name}</div>
            <div className="pv-cat">{project.category}</div>
            <div className="pv-lines">
              <b />
              <b />
              <b />
            </div>
            <div className="pv-cta" />
          </div>
          <div className="pv-cards">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
