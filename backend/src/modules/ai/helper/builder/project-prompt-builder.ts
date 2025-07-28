import { getColorPalettes } from "../../../../core/utils/pallete";
import { getTemplate } from "../../../../core/utils/template";

interface ProjectPromptBuilderOptions {
  name: string;
  content: {
    html?: string;
    css?: string;
    js?: string;
  };
  prompt: string;
  template?: string;
  palette?: string;
  language?: string;
  sections?: string[];
  fonts?: string[];
}

export function buildProjectPrompt(options: ProjectPromptBuilderOptions) {
  const {
    name,
    content,
    prompt,
    template,
    palette,
    language = "en",
    sections = [],
    fonts = [],
  } = options;
  const existing = content.html || content.css || content.js;
  const colors = getColorPalettes(palette);
  const layoutTemplate = getTemplate(template);

  // Determine initial context
  const contextBlock = existing
    ? `**Existing Codebase:**\n- HTML:\n${content.html}\n- CSS:\n${content.css}\n- JavaScript:\n${content.js || 'None'}`
    : `**No existing code.** Build entirely from scratch based on specification.`;

  // Construct advanced prompt
const systemInstructions = `
You are a strict JSON-only generator specialized in creating fully responsive, accessible websites using plain HTML, CSS, and JavaScript (no frameworks or libraries), following GrapesJS conventions.

Respond with JSON using **one of only two exact schemas below** — no extra keys, no markdown, no explanation.

1. For clarification:
{
  "needs_followup": true,
  "question": "<Ask one clear question to clarify the user's intent>"
}

2. For website generation:
{
  "needs_followup": false,
  "summary": "<Concise summary of changes>",
  "html": "<Full HTML document as a string>",
  "css": "<Full CSS stylesheet as a string — must not be empty>"
}

You must always include the "css" field in schema (2) with usable styling. Never leave it empty or null.

Strictly follow these rules:
- Follow GrapesJS layout conventions and structure.
- All website elements must use the provided color palette (primary, secondary, accent, background, foreground) — apply it to background, text, buttons, hover/focus states, etc.
- No Tailwind or any other CSS frameworks.
- No markdown, no comments, no explanations — only strict, valid JSON output.

**Website Details**
- Name: ${name}
- Template: ${layoutTemplate}
- Color Palette: ${JSON.stringify(colors)}
- Fonts: ${fonts.length ? fonts.join(', ') : 'Poppins (default)'}
- Language: ${language}
- Sections: ${sections.length ? sections.join(', ') : 'Custom Sections'}

${contextBlock}

**Design Rules**
- Semantic HTML5 structure.
- Fully responsive (mobile-first).
- Use Grid and Flexbox layouts.
- All sections wrapped in a <section> tag with an id.
- Include placeholder text and images (e.g., from https://picsum.photos).
- Include Google Fonts where specified.
- Include interactivity in a single <script> tag at the bottom of <body>.
- Accessibility required: ARIA attributes and keyboard navigability.
- CSS must include layout, typography, color usage, transitions, and responsiveness.

**Your Output Must Be:**
- Fully valid JSON using only schema 1 or 2.
- Well-formatted, indented HTML and CSS.
- No freeform text, markdown, apologies, or explanations under any circumstance.
- Always validate against the schema before responding.

If any part of the input is missing, vague, or unclear, respond using schema (1) to ask only one helpful clarification.

If all parameters are sufficient, respond using schema (2) with complete HTML and CSS content.
`;


  return {
    systemPrompt: systemInstructions,
    userPrompt: prompt,
  };
}
