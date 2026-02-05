'use client';
import React from 'react';
import Quiz from '../components/Quiz.tsx';
import { COMPLETE_COURSE_DATA } from '../unit1Data';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const unit = COMPLETE_COURSE_DATA.units[1];
  const module = unit.modules[currentModule - 1];
  const content = module?.content as any;

  const renderModule = () => {
    if (!module) return <div>Module not found</div>;

    return (
      <div className="module-content">
        <div className="lesson-header">
          <div className="lesson-number-badge">{currentModule}</div>
          <div className="lesson-title-main"><h1>{module.title}</h1></div>
        </div>

        <section className="content-section">
          {content.definition && <><h3>Definition</h3><p>{content.definition}</p></>}
          {content.simpleExplanation && <><h3>Understanding</h3><p>{content.simpleExplanation}</p></>}
          {content.scope && <><h3>Scope</h3><p>{content.scope}</p>{content.scopeDetails && <ul>{content.scopeDetails.map((d: string, i: number) => <li key={i}>{d}</li>)}</ul>}</>}
          {content.importance && <><h3>Importance</h3><ul>{content.importance.map((i: string, idx: number) => <li key={idx}>{i}</li>)}</ul></>}
          {content.renewable && <><h3>Renewable Energy</h3><p>{content.renewable.definition}</p><ul>{content.renewable.types.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul></>}
          {content.nonRenewable && <><h3>Non-Renewable Energy</h3><p>{content.nonRenewable.definition}</p><ul>{content.nonRenewable.types.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul></>}
          {content.uses && <><h3>Uses</h3><ul>{content.uses.map((u: string, i: number) => <li key={i}>{u}</li>)}</ul></>}
          {content.deforestation && <><h3>Deforestation</h3><h4>Causes</h4><ul>{content.deforestation.causes.map((c: string, i: number) => <li key={i}>{c}</li>)}</ul><h4>Effects</h4><ul>{content.deforestation.effects.map((e: string, i: number) => <li key={i}>{e}</li>)}</ul></>}
          {content.conservation && <><h3>Conservation</h3><ul>{content.conservation.map((c: string, i: number) => <li key={i}>{c}</li>)}</ul></>}
          {content.sources && <><h3>Water Sources</h3><h4>Surface Water</h4><ul>{content.sources.surface.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul><h4>Groundwater</h4><ul>{content.sources.ground.map((g: string, i: number) => <li key={i}>{g}</li>)}</ul></>}
          {content.problems && <><h3>Problems</h3><ul>{content.problems.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul></>}
          {content.dams && <><h3>Dams</h3><h4>Benefits</h4><ul>{content.dams.benefits.map((b: string, i: number) => <li key={i}>{b}</li>)}</ul><h4>Problems</h4><ul>{content.dams.problems.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul></>}
          {content.types && <><h3>Types</h3>{Object.entries(content.types).map(([k, v]: [string, any]) => <div key={k}><h4>{k}</h4><ul>{Array.isArray(v) ? v.map((i: string, idx: number) => <li key={idx}>{i}</li>) : Object.entries(v).map(([k2, v2]: [string, any]) => <div key={k2}><h5>{k2}</h5><ul>{Array.isArray(v2) && v2.map((item: string, idx: number) => <li key={idx}>{item}</li>)}</ul></div>)}</ul></div>)}</>}
          {content.extraction && <><h3>Extraction Methods</h3><h4>Methods</h4><ul>{content.extraction.methods.map((m: string, i: number) => <li key={i}>{m}</li>)}</ul><h4>Impacts</h4><ul>{content.extraction.impacts.map((imp: string, i: number) => <li key={i}>{imp}</li>)}</ul></>}
          {content.worldProblems && <><h3>World Food Problems</h3><ul>{content.worldProblems.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul></>}
          {content.modernAgriculture && <><h3>Modern Agriculture</h3><h4>Benefits</h4><ul>{content.modernAgriculture.benefits.map((b: string, i: number) => <li key={i}>{b}</li>)}</ul><h4>Problems</h4><ul>{content.modernAgriculture.problems.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul></>}
          {content.overgrazing && <><h3>Overgrazing</h3><ul>{content.overgrazing.map((o: string, i: number) => <li key={i}>{o}</li>)}</ul></>}
          {content.solutions && <><h3>Solutions</h3><ul>{content.solutions.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul></>}
        </section>

        {content.images && content.images.length > 0 && (
          <section className="content-section">
            <h3>Visual Resources</h3>
            {content.images.map((img: string, idx: number) => (
              <div key={idx} className="image-container">
                <img src={img} alt={`Module visual ${idx + 1}`} />
              </div>
            ))}
          </section>
        )}

        {content.videos && content.videos.length > 0 && (
          <section className="content-section">
            <h3>Video Resources</h3>
            {content.videos.map((videoId: string, idx: number) => (
              <div key={idx} className="video-embed">
                <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${videoId}`} title={`Video ${idx + 1}`} allowFullScreen></iframe>
              </div>
            ))}
          </section>
        )}

        {content.quiz && content.quiz.questions && (
          <section className="content-section">
            <h3>Module Quiz</h3>
            <Quiz title={`${module.title} Quiz`} questions={content.quiz.questions.map((q: any) => ({question: q.question, options: q.options, correctAnswer: q.correct, explanation: `Correct: ${q.options[q.correct]}`}))} />
          </section>
        )}

        <div className="navigation-buttons">
          {currentModule > 1 && <button onClick={() => setCurrentModule(currentModule - 1)} className="prev-module-btn">← Previous</button>}
          {currentModule < unit.modules.length && <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn">Next →</button>}
        </div>
      </div>
    );
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit2;
