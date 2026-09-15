import { Banner } from "@/components/wiki/Banner";
import { ModelFigure } from "@/components/wiki/engineering/ModelFigure";
import { ModelTable } from "@/components/wiki/engineering/ModelTable";
import { SummaryBoxes } from "@/components/wiki/engineering/SummaryBoxes";
import { ReferencesSection } from "@/components/wiki/ReferencesSection";
import { WikiPage } from "@/components/wiki/WikiPage";
import { WikiSection } from "@/components/wiki/WikiSection";
import { PLACEHOLDER_MODEL_CONTENT } from "@/lib/wiki/placeholders";
import { renderModelText } from "@/lib/wiki/text";
import type {
  ModelContentBlock,
  ModelPageContent,
  WikiReference,
} from "@/types/wiki";

// Renders a section body as one <p> per blank-line-separated paragraph,
// italicizing species names and linking any "[refN]" markers to their entry
// in `references`. Renders nothing for empty/placeholder-pending text.
function Paragraphs({
  text,
  references,
}: {
  text: string;
  references: WikiReference[];
}) {
  const paragraphs = text.trim();
  if (!paragraphs) return null;
  return (
    <>
      {paragraphs.split(/\n\s*\n/).map((paragraph) => (
        <p key={paragraph}>{renderModelText(paragraph, references)}</p>
      ))}
    </>
  );
}

// Renders a Model Construction subsection's content blocks in order —
// paragraphs, embedded figures, data tables, and bullet lists all draw from
// the same source-of-truth list so they interleave freely.
function ModelBlocks({
  blocks,
  references,
}: {
  blocks: ModelContentBlock[];
  references: WikiReference[];
}) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <Paragraphs
                // biome-ignore lint/suspicious/noArrayIndexKey: static block list, order never changes
                key={index}
                text={block.text}
                references={references}
              />
            );
          case "figure":
            // biome-ignore lint/suspicious/noArrayIndexKey: static block list, order never changes
            return <ModelFigure key={index} caption={block.caption} />;
          case "table":
            return (
              <ModelTable
                // biome-ignore lint/suspicious/noArrayIndexKey: static block list, order never changes
                key={index}
                caption={block.caption}
                headers={block.headers}
                rows={block.rows}
                references={references}
              />
            );
          case "list":
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: static block list, order never changes
              <ul key={index} className="list-disc space-y-2 pl-5">
                {block.items.map((item, itemIndex) => (
                  <li
                    // biome-ignore lint/suspicious/noArrayIndexKey: static item list, order never changes
                    key={itemIndex}
                  >
                    {renderModelText(item, references)}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

// Shared layout for the 5 engineering model pages (RNAt, ML1, ML2, Kinetic,
// Financial). Pass a page's real write-up via `content`; pages without one
// yet fall back to placeholder copy. The structure itself (sections, TOC,
// image slots) stays the same across all 5.
export function ModelPage({
  title,
  src,
  content = PLACEHOLDER_MODEL_CONTENT,
}: {
  title: string;
  src: string;
  content?: ModelPageContent;
}) {
  return (
    <>
      <Banner title={title} src={src} />

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <SummaryBoxes points={content.summaryPoints} />
      </section>

      <WikiPage>
        <WikiSection id="problem-statement" title="Problem Statement">
          <Paragraphs
            text={content.problemStatement}
            references={content.references}
          />
        </WikiSection>

        <WikiSection id="background" title="Background">
          <Paragraphs
            text={content.background}
            references={content.references}
          />
        </WikiSection>

        <WikiSection id="model-construction" title="Model Construction">
          {content.modelConstruction.map((subsection, index) =>
            subsection.title ? (
              <div
                key={subsection.title}
                className="border-l-2 border-primary/30 pl-5 transition-colors duration-200 hover:border-accent space-y-4"
              >
                <h3 className="font-display text-lg text-foreground mb-3">
                  {subsection.title}
                </h3>
                <ModelBlocks
                  blocks={subsection.blocks}
                  references={content.references}
                />
              </div>
            ) : (
              <ModelBlocks
                // biome-ignore lint/suspicious/noArrayIndexKey: static subsection list, order never changes
                key={index}
                blocks={subsection.blocks}
                references={content.references}
              />
            ),
          )}
        </WikiSection>

        <WikiSection id="results" title="Results">
          <Paragraphs text={content.results} references={content.references} />
          <div className="flex flex-col gap-10">
            {content.resultsFigures.map((caption) => (
              <ModelFigure key={caption} caption={caption} />
            ))}
          </div>
        </WikiSection>

        <WikiSection id="discussion" title="Discussion">
          <Paragraphs
            text={content.discussion}
            references={content.references}
          />
        </WikiSection>

        {content.validation.trim() ? (
          <WikiSection id="validation" title="Validation">
            <Paragraphs
              text={content.validation}
              references={content.references}
            />
          </WikiSection>
        ) : null}

        <WikiSection
          id="limitations-next-steps"
          title="Limitations & Next Steps"
        >
          <Paragraphs
            text={content.limitationsNextSteps}
            references={content.references}
          />
        </WikiSection>

        {content.references.length > 0 ? (
          <ReferencesSection
            id="references"
            title="References"
            references={content.references}
          />
        ) : (
          <WikiSection id="references" title="References">
            <p className="text-muted-foreground">Reference list coming soon.</p>
          </WikiSection>
        )}
      </WikiPage>
    </>
  );
}
