# Wantware

Wantware is the representation layer that turns a want into trustworthy
computation: seven bidirectional transformations, three distinct authorities,
and one versioned intermediate representation that keeps them from silently
rewriting each other.

This folder holds the current Agency model and IR specifications. The governing
meta-process is [The WantWare Development Process §3.1](../../../architectures/The%20WantWare%20Development%20Process.md#31-the-speech-act-flow).
Earlier drafts were reconciled into these specifications; removed versions remain
in Git history. [Agency/docs/WantWare.md](../WantWare.md) also survives as an
explicitly historical first-pass sketch, not the current IR contract.

The process carried through the factory is:

```text
Expressive Want → Assertive account of evidenced current and wanted states
→ Declarative required truths bridging the gap → Commissive delivery promise
→ Directives authored and issued by that committer → executable Imperatives
→ evidence of fulfillment against the original Want
```

Assertives distinguish evidence, assumptions, and uncertainty; the wanted state
is intended, not an observed outcome. An accountable actor commits to delivering
the required truths before authoring and issuing the work instructions. The
seven factory stages and four owned IR strata are orthogonal to these speech
acts: stages organize transformation, strata partition representation ownership,
and speech acts carry meaning and delivery obligations through both.

Ratification, authority, readiness, and AXIS Manager state commits do not
substitute for a delivery promise or Directive issuance. IR 0.3 has no dedicated
commitment record, commitment-to-contract binding, Directive issuance state, or
committer-to-Directive authorship link. Keep these in separate engagement records
today, bound to exact contract and design versions/hashes. The alignment preserves
the schema grammar and runtime behavior; annotations and JSDoc clarify their
limits. A coordinated versioned amendment and enforcement remain proposed in the
implementation plan.

## The documents

| Document | What it is | Status |
|---|---|---|
| [Wantware.md](./Wantware.md) | The model. Seven stages, three roles, semantic contracts and cognitive designs, speech act obligations, evidence and satisfaction, truth modes, the reverse path, crystallization, doctrine. | Specification (seven-stage model) |
| [WantwareIR.md](./WantwareIR.md) | The intermediate representation. One graph envelope with four owned strata, exact bindings, readiness, handoffs, change control, and a domain-by-domain reference. | Technical specification, IR 0.3 |
| [WantwareIR.schema.json](./WantwareIR.schema.json) | JSON Schema (draft 2020-12) for IR 0.3 envelopes. | Normative serialization |
| [Adding the Wantware Representation to the Agency.md](./Adding%20the%20Wantware%20Representation%20to%20the%20Agency.md) | How the representation enters ACE³. The join, the six deltas, roles and typed handoffs, invariants, staged implementation, calibration, decisions, open questions. | Integration proposal; implementation progress is tracked in the plan. |
| [Wantware Implementation Plan.md](./Wantware%20Implementation%20Plan.md) | Codemap-grounded implementation sequence, verified code gaps, component changes, compatibility and recovery, calibration checkpoints, and acceptance criteria. | In progress: P1–P2 implemented; P0 and P3–P8 not started. Commitment/issuance amendment and enforcement proposed. |

Read them in that order. The schema is a reference while reading `WantwareIR.md`.

## Related reading and implementation

These files connect the current Agency specifications to the broader process,
earlier reasoning, related plans, and partial implementation.

| Document | Relationship and status |
|---|---|
| [The WantWare Development Process](../../../architectures/The%20WantWare%20Development%20Process.md) | Canonical meta-process and speech act flow; a draft synthesis governing this alignment. |
| [Wantware 101](../../../architectures/Wantware%20101.md) | Introductory account of the procedural discipline. |
| [Wantware Generative Code Orchestration](../../../architectures/Wantware%20Generative%20Code%20Orchestration.md) | Process design for decomposing wants into bounded generation tasks. |
| [architectures/wantware.md](../../../architectures/wantware.md) | Exploratory goal-cognition design; its grouped transformations are not the current seven-stage specification. |
| [DevPlan — CHAOE](../../../architectures/DevPlan%20-%20CHAOE.md) and [integration implementation plan](../../../architectures/integration%20implementation%20plan.md) | Related workbench development and architectural integration plans; distinct from the Agency implementation plan above. |
| [A synthesis of CHMM, AXIS, ODD, EVOLVE](../../../architectures/A%20synthesis%20of%20CHMM%20AXIS%20ODD%20EVOLVE.md) | Broader architectural synthesis connecting process, computational structure, ontology, and evolution. |
| [AXIS feedback](../../../architectures/AXIS/AXIS%20feed.md) | Architectural assessment and framing; Manager state commits remain distinct from delivery commitments. |
| [Ontologically Directed Agency](../../../Plans/Ontologically%20Directed%20Agency.md) | Related orienting model for ontology-directed action. |
| [agenticCognition](../../agenticCognition.md) | Conceptual precursor; retained reasoning with a status note directing current vocabulary here. |
| [Actualization framework](../../cogmods/actualization.framework.md) | Human-world consulting application of the process. |
| [Historical WantWare sketch](../WantWare.md) | Retained first-pass IR 0.1 illustrations with process clarifications; superseded by the current specifications. |
| [SOWER](../SOWER.md) and [Getting The Agency to Weave](../Getting%20The%20Agency%20to%20Weave.md) | Weaving lifecycle and proposed Agency topology integration. |
| [WeaveIR canonical copy](../weave/WeaveIR.md) and [retained WeaveIR copy](../WeaveIR.md) | Two aligned copies of the proposed work-topology specification; neither claims implemented kernel support. |
| [wantware-ir.js](../../kernel/wantware-ir.js) and [evidence.js](../../kernel/evidence.js) | Partial P2 evidence vocabulary and evaluation implementation. They do not implement the full IR registry or enforce commitment/issuance lineage. |

## Pinned vocabulary

One term names one concept. Where the Agency and Wantware use the same word for
different things, the collision is stated rather than hidden.

| Term | Means | Does not mean |
|---|---|---|
| **Conception** | The want before it has a shape. The client's words, verbatim. | A requirement |
| **Conceptualization** | A recorded reading of the conception: names, boundaries, rough plans, marked as a reading. | The formal meaning |
| **Formalization** | The semantic transformation only: conceptualization → versioned semantic contract. | Any movement toward concreteness |
| **Cognification** | Formal meaning → mechanism design (architecture, procedure, capabilities, observation plan). | Source generation |
| **Codification** | Mechanism design → source, tests, schema, configuration, build inputs. | Crystallization |
| **Compilation** | Source → executable artifact. | — |
| **Computation** | One executed trajectory and its observations. | Reality in full |
| **Materialization transition** | Any movement from one of the seven stages to the next. | Formalization |
| **Materialization stratum** | The IR stratum holding bindings and artifacts. | The whole ladder |
| **Crystallization** | Movement down the Agency's Cognition Ladder: a delivered capability needs less run-time cognition. | Movement down the Materialization Ladder |
| **Realized correctness** | Whether an integrated, runnable candidate coheres under build, contract, and outcome evaluation. It is established by evidence and independent validation, not asserted by its generator. | Semantic correctness or source conformance alone |
| **Formalizer** | Custodian and author of the semantic contract. Not sovereign over meaning. | The client, or the Cognifier |
| **Cognifier** | Designer of the mechanism that satisfies a contract version. In ACE³ v0.1 the Architect performs this. | A code generator |
| **Codifier** (Wantware) | Materializer of the accepted mechanism as source. In ACE³ the Builder performs this. | The Agency role historically named `codifier` |
| **Integrator** (Agency) | Production role between Builder and Validator: connects a Builder materialization into a candidate and returns realization evidence. No historical id. | The Productizer |
| **Productizer** (Agency) | The Agency role historically persisted as `crystallizer`; finds stable cognition and proposes deterministic replacements. | A Wantware Crystallizer; the Integrator |
| **Source authority** | Whoever is sovereign over intended meaning. The client, in an engagement. | The Formalizer |
| **Declarative** | Required truths, constraints, and acceptance conditions bridging the current/wanted state gap. | Instructions for implementation |
| **Commissive** | An accountable actor's explicit delivery promise for those truths, with scope and conditions. | Ratification, readiness, authorization, or a Manager state commit |
| **Directive** | Work instructions authored and issued by that committer, directly or through delegated roles. | A candidate design alone, or proof of a delivery promise |
| **Imperative** | Concrete executable operations that fulfill issued Directives. | Evidence of fulfillment merely because execution returned successfully |
| **Required behavior** | A state change or observation the delivered system must support. Semantic. | A capability |
| **Realization capability** | An implementation-independent ability the Cognifier selects. Cognitive. The IR's `capabilities` domain. | A tool or API |
| **Implementation binding** | The concrete provider, API, function, or component chosen at Codification. Materialization. | A capability |
| **Engine capability** | What the Agency's own runtime is authorized to do (`browser.screenshot`). ACE³ §48 authority. | Anything in the IR |
| **Evidence requirement** | What must be observed to establish a claim. Formalizer-owned. | How it is observed |
| **Observation mechanism** | How a required observation will be acquired. Cognifier-owned. | The concrete tool |
| **Satisfaction case** | Claim + warrant + evidence contracts + independence requirement. The argument that evidence establishes a success claim. | A test file |
| **Epistemic state** | What is known: `KNOWN`, `KNOWN_ABSENT`, `UNKNOWN`, `AMBIGUOUS`. | Whether observation was attempted |
| **Acquisition status** | What happened when observing: `NOT_QUERIED`, `ACQUIRED`, `UNAVAILABLE`, `TOOL_FAILED`, `OBSERVATION_FAILED`, `NOT_APPLICABLE`. | A truth value |
| **Bounded** | The artifact states its frame, established claims, known unknowns, held-knowledge queries, and out-of-frame risk. | Ready for the next handoff |
| **Readiness** | Whether a specific next role may consume this exact artifact: `formalizable`, `cognifiable`, `codifiable`. | Boundedness |
| **Internal closure** | The artifact is coherent and resolved on its own terms. | Adequacy to the want |
| **External adequacy** | The artifact is faithful and sufficient to its authoritative upstream. | Internal consistency |

The role boundary is deliberately four-part even though the IR has only four
owned strata: the source authority and Formalizer own meaning; the Cognifier
owns mechanism; the Codifier owns its source representation; and the Agency
Integrator makes a provisional implementation cohere into a stable candidate.
The latter is a cross-cutting realization function, not a new IR owner. It may
compile, integrate, run contract checks, and return mechanical evidence
upstream; a Validator/Auditor independently establishes
whether the observed candidate satisfies the semantic contract.

---

> **Attribution and Support**
>
> Wantware, formulated by Matthew Quarneri — MENTIC Cognitive Systems. © 2026 MENTIC LLC. Learn more in the [Wantware overview](wantware.html).
>
> If you found these ideas useful you could [Buy Me a Coffee](https://buymeacoffee.com/mattq4) to show your support.
>
> **Support and Advisory Services**
>
> If Wantware contributes substantial commercial value to your organization, please consider supporting its continued development through sponsorship or a paid advisory engagement. Financial support is voluntary.
>
> For sponsorship, workshops, process design, or agent orchestration consulting, contact [consulting@mentic.com](mailto:consulting@mentic.com).
>
> For more interesting ideas visit [MENTIC Cognitive Systems](https://www.mentic.com).
