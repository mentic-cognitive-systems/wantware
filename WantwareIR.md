# WantwareIR — Stratified Graph Intermediate Representation

**Status:** Technical specification, IR version 0.3. Supersedes the 0.2 narrative
and the 0.2 reference; §18 is the changelog.\
**Schema:** [WantwareIR.schema.json](./WantwareIR.schema.json) (JSON Schema,
draft 2020-12) is the normative serialization.\
**Model:** [Wantware.md](./Wantware.md) defines the stages, roles, and truth
modes this representation carries.

---

## 1. Purpose

WantwareIR resists becoming either a prompt format or a programming language. It
is one versioned graph envelope in which source, formal meaning, cognitive
realization, and concrete materialization remain connected without losing their
distinct authorities.

> WantwareIR preserves what was asked, describes what it means, records the
> mechanism selected to satisfy it, and binds that mechanism to artifacts. It
> describes how success is to be evidenced without prematurely choosing the
> observation mechanism or source that implements it.

The process carried by that graph follows
[The WantWare Development Process §3.1](../../../architectures/The%20WantWare%20Development%20Process.md#31-the-speech-act-flow):

```text
Expressive Want → Assertive account of current and wanted states
→ Declarative required truths → Commissive delivery commitment
→ committer-authored Directives → executable Imperatives
→ evidence against the required truths and original Want
```

These are obligations carried through the seven factory stages, not replacement
stage names or additional strata. In particular, a proposed mechanism, a source
ratification, and an accepted handoff do not themselves commit anyone to delivery.

It spans the path from Conception through Codification and is not merely emitted
after Cognification. Those stages accumulate in four representational strata:

```text
SOURCE            preserved wants, conceptualized readings, source material,
                  motivating context
SEMANTIC          intent, ontology, state meanings, constraints, invariants,
                  success claims, evidence requirements, warrants, satisfaction
                  cases, frame, assumptions, open questions
COGNITIVE         candidate and selected mechanisms, architecture, procedures,
                  capabilities, dependencies, failure modes, decision rationale,
                  observation plan, satisfaction mappings
MATERIALIZATION   concrete bindings plus source, test, schema, configuration,
                  package, and build artifacts
```

The IR captures enough structure that a software factory can preserve the
originating want, formalize its meaning without choosing a mechanism, determine
what entities and actions exist, select or synthesize procedures, determine legal
state transitions, identify required capabilities, generate source, generate
tests and validators, observe execution, evaluate evidence, determine whether
success occurred, and trace failure back to the appropriate abstraction.

It is therefore not a specification format. It is the **shared,
authority-partitioned state representation of the software factory**.

### 1.1 The questions it answers

```js
const WantwareIRQuestions = {
  source: "What was expressed, by whom, in what context, and how was it initially understood?",
  semantic: {
    meaning:              "What exactly is wanted and why?",
    world:                "What exists, can be true, and may change?",
    limits:               "What constraints and invariants must hold?",
    success:              "What claims would constitute success?",
    evidenceRequirements: "What observable properties would establish those claims?",
    satisfactionArgument: "Why would those properties warrant those claims?"
  },
  cognitive: {
    mechanism:       "Which candidate mechanism is selected, and why?",
    procedure:       "What architecture and procedure realize the desired change?",
    capability:      "What abilities and dependencies does it require?",
    observationPlan: "How will the required evidence be acquired?"
  },
  materialization: "What concrete bindings and artifacts express the selected mechanism?",
  evidence:        "What was observed, how was it acquired, and what does it establish?"
};
```

### 1.2 Design principles

```js
const WantwareIRPrinciples = {
  semanticBeforeImplementation:     "Describe meaning before mechanism.",
  authorityPreserving:              "Source authority owns intended meaning; the Formalizer custodies its representation; the Cognifier owns mechanism; the Codifier owns materialization.",
  exactBindings:                    "Every downstream stratum binds an exact upstream version and content hash.",
  explicitState:                    "Important state exists outside model cognition.",
  explicitUncertainty:              "Unknown never silently becomes false, empty, or assumed.",
  epistemicSeparateFromAcquisition: "What is known stays distinct from whether and how observation was attempted.",
  procedureSeparateFromSuccess:     "How we try is different from what proves success.",
  capabilitySeparateFromProvider:   "Realization capability is distinct from concrete implementation.",
  requirementSeparateFromObservation: "What evidence is required stays distinct from how it is acquired.",
  evidenceBeforeBelief:             "Claims about reality require observable support.",
  closureSeparateFromAdequacy:      "Internal consistency does not establish adequacy to the upstream want.",
  readinessNotBoundedness:          "An honest partial artifact is valid; it is not thereby ready for the next handoff.",
  graphNative:                      "The logical model is a graph even though JSON is the serialization.",
  progressivelyRefinable:           "Incomplete representations are valid intermediate artifacts.",
  implementationIndependent:        "One semantic stratum admits multiple cognitive realizations and codifications.",
  boundedInvalidation:              "Upstream change marks bound consumers stale and exposes a blast radius.",
  traceable:                        "Derived structures retain provenance back toward conception.",
  inspectable:                      "Humans and agents can both read the representation.",
  compilable:                       "Once sufficiently resolved, codification is mechanically derivable."
};
```

---

## 2. Envelope

WantwareIR is one graph serialized as one envelope. The domain collections sit at
stable top-level paths; the `strata` manifest assigns each domain to exactly one
authoritative owner.

```js
const WantwareIR = {
  meta: {},
  strata: {},              // ownership, version, hash, status per stratum
  readiness: [],           // ReadinessAssessment records
  ratifications: [],       // attestations over exact stratum bindings
  handoffs: {},            // formalization · cognification · codification

  // Source stratum
  conception: {},
  conceptualization: {},

  // Semantic stratum
  intent: {},
  ontology: {},
  state: {},
  frame: {},
  assumptions: [],
  openQuestions: [],
  constraints: [],
  evidence: {},
  satisfactionCases: [],
  success: {},

  // Cognitive stratum
  mechanisms: {},
  architecture: {},
  capabilities: [],
  procedures: [],
  dependencies: [],
  failures: {},
  observationPlan: {},
  satisfactionMappings: [],

  // Declared per graph (see §10.7)
  policies: [],

  // Materialization stratum
  tests: [],
  implementation: {},

  // Cross-cutting records
  changeControl: {},
  provenance: {}
};
```

| Stratum | Owner role | Governs (default `sections`) | Must not silently do |
|---|---|---|---|
| `source` | `source-authority` | `conception`, `conceptualization` | Be reinterpreted as though the source said something else |
| `semantic` | `formalizer` | `intent`, `ontology`, `state`, `frame`, `assumptions`, `openQuestions`, `constraints`, `evidence`, `satisfactionCases`, `success` | Choose a mechanism or implementation |
| `cognitive` | `cognifier` | `mechanisms`, `architecture`, `capabilities`, `procedures`, `dependencies`, `failures`, `observationPlan`, `satisfactionMappings` | Change the semantic contract |
| `materialization` | `codifier` | `tests`, `implementation` | Invent a mechanism or requirement |

**Owner** means custodial authority to author and version that representation.
The source authority remains sovereign over intended meaning; the Formalizer
cannot make a source-originating semantic change valid merely by writing it into
the semantic stratum. Operationally one agent may perform more than one role; the
records and authorities remain distinct.

### 2.1 Projections

The canonical handoff artifacts are **projections** of this one envelope, not
independently mutable documents:

```text
ConceptualizationPacket  = source stratum sections at strata.source.{version, contentHash}
SemanticContract@v#hash  = semantic stratum sections at strata.semantic.{version, contentHash}
MechanismDesign@v#hash   = cognitive stratum sections at strata.cognitive.{version, contentHash}
CodificationManifest@v#hash = materialization sections at strata.materialization.{version, contentHash}
```

A consumer that says "I designed against `SemanticContract F-42@7#sha256:…`" is
naming exactly the semantic sections of this envelope at that version and hash.

### 2.1.1 Realization is not a fifth stratum

The Agency Integrator may consume a `CodificationManifest`, build artifacts,
execution traces, and satisfaction-case results to make a materialization
cohere as a stable candidate. That is a cross-cutting realization function, not
authority to author a fifth IR stratum or to mutate semantic, cognitive, or
materialization content in place. Its output is attributable candidate and
realization evidence: compilation/integration results, reproducibility data,
and contract-check results. Immutable revisions remain
owned by the appropriate stratum owner; independent evaluation of the evidence
remains the basis for established success claims.

When integration finds a defect, its return identifies the earliest
explanatory owner: materialization conformance or unavailable binding returns to
the Codifier; an unworkable architecture or procedure returns to the Cognifier;
a contradiction or missing success meaning returns to the Formalizer (and, when
needed, source authority). It must not silently choose among semantic meanings.

### 2.1.2 Speech act mapping and current representational limits

| Speech act | Existing 0.3 representation | Process obligation |
|---|---|---|
| Expressive | `conception.expression`, source references, conceptualization readings | Preserve the original Want and the distinction between expression and interpretation. |
| Assertive | Confirmed source readings, semantic state meanings, frame, assumptions and open questions; separately acquired evidence records | Establish the current and wanted states with evidence, assumptions, and uncertainty distinguished. A wanted state is intended, not already observed. |
| Declarative | `intent.desiredStates`, `intent.desiredChanges`, constraints, invariants, success criteria, evidence contracts and satisfaction cases | Define the required truths bridging the current/wanted gap without prescribing a mechanism. |
| Commissive | **No dedicated record in the 0.3 envelope** | An accountable actor explicitly commits to the exact Declaratives, scope, dependencies, and delivery conditions. Keep this in a separate engagement record today. |
| Directive | Cognitive architecture, procedures, dependencies, observation plan and satisfaction mappings describe the work | After committing, that actor authors the issued instructions through the Cognifier role. A candidate design is not yet an issued Directive; 0.3 has no dedicated link proving commitment or committer authorship. |
| Imperative | Materialization bindings and artifacts, compilation products, execution events | Concrete operations fulfill the issued Directives; their effects require evidence. |

The projections in §2.1 retain these distinctions: `SemanticContract` carries
both Assertive context and Declarative obligations; `MechanismDesign` can carry
proposed work or the design underlying issued Directives, and its presence alone
does not establish issuance. `CodificationManifest` binds executable realization
to that design. None of the four projections substitutes for the Commissive.

**Existing contract:** IR 0.3 has no serialized commitment collection,
commitment-to-contract binding, Directive issuance state, or committer-to-Directive
authorship link. `ownerRef`, decision `madeByRef`, provenance, ratifications, and
handoff acceptance cannot be interpreted as those missing records. The current
schema and validators therefore cannot enforce the complete speech act lineage.
The tables and conceptual chains here describe the process, not new JSON fields.

**Required future work:** machine enforcement needs a coordinated, versioned
contract amendment covering schema, specification, producers, validators, and
execution gates. It must represent accountable commitments bound to exact
semantic obligations and committer-authored Directives bound to those commitments
and cognitive designs, including revision and invalidation behavior. Until then,
the engagement workflow must retain those records separately, citing existing
source, semantic, cognitive, and materialization identities by exact version/hash
and relevant graph references. Missing records leave process readiness unproven
even when the envelope is structurally valid.

### 2.2 Progressive population

Not every envelope needs every domain substantively populated. The required
containers, strata records, and handoffs exist from the start; collections for
work not yet performed stay empty and their stratum status stays `unstarted`. A
conception may initially contribute only `conception` and `conceptualization`.
Formalization then populates the semantic domains; `procedures` fills only during
Cognification. A partial graph is valid work in progress because unstarted
containers are explicit. Advancement across a handoff is a separate readiness
decision (§5).

Progressive population permits feasibility exploration before anyone promises
delivery. Advancing that proposal into directed delivery requires a separate
Commissive followed by instructions authored by its committer (§2.1.2).

---

## 3. Identity, References, and Bindings

### 3.1 Semantic identity

Everything important has a stable semantic identifier, preferably URI-like:

```json
{ "id": "wantware://finance/transaction", "type": "ontology.entity" }
```

References are explicit: `{ "entityRef": "wantware://finance/transaction" }`.
This lets independently authored modules compose. A procedure can use an
ontology without copying it; a policy can govern procedures in several systems;
a capability can satisfy several procedures.

### 3.2 Two kinds of reference

```text
$ref   JSON Schema — the grammar of WantwareIR (type relationships)
*Ref   Wantware semantic — graph relationships inside an IR instance
```

JSON Schema validates serialization structure. It is not the semantic graph
engine; reference resolution, closure, reachability, and readiness are semantic
validation (§14).

### 3.3 Version, content hash, stratum binding

Every stratum record carries a human-facing `version` and a content-addressed
`contentHash` that includes its algorithm (`sha256:<hex>`). Both are required: a
matching label with different bytes is not the same input, and identical bytes
under a new label should remain explainable.

```js
StratumBinding = { stratum: "semantic", version: "1.3.0", contentHash: "sha256:…" }
```

Bindings are immutable historical facts. Every downstream `basedOn`, every
handoff, every readiness assessment, every ratification, and every revision
request names one. If an upstream owner publishes a new version or hash,
consumers bound to the prior identity become `stale` until revalidated or
regenerated. **Stale means the accepted basis changed, not that the consumer is
proven wrong.**

The hash covers the canonical serialization of the stratum's sections plus its
`basedOn` bindings. Ratification is a separate attestation over the hash, never a
field inside the thing it ratifies (§6).

---

## 4. Strata Manifest and Lifecycle

```js
strata: {
  source: {
    ownerRole: "source-authority", ownerRef: "wantware://actor/client",
    version: "1.0.0", contentHash: "sha256:…", status: "captured",
    sections: ["conception", "conceptualization"],
    validatorRefs: ["wantware://validator/source-integrity"]
  },
  semantic: {
    ownerRole: "formalizer",
    version: "1.1.0", contentHash: "sha256:…", status: "formalized",
    sections: ["intent", "ontology", "state", "frame", "assumptions", "openQuestions",
               "constraints", "evidence", "satisfactionCases", "success"],
    validatorRefs: ["wantware://validator/semantic-contract"],
    basedOn: [{ stratum: "source", version: "1.0.0", contentHash: "sha256:…" }]
  },
  cognitive: {
    ownerRole: "cognifier",
    version: "2.0.0", contentHash: "sha256:…", status: "cognified",
    sections: ["mechanisms", "architecture", "capabilities", "procedures", "dependencies",
               "failures", "observationPlan", "satisfactionMappings"],
    validatorRefs: ["wantware://validator/cognitive-realization"],
    basedOn: [{ stratum: "semantic", version: "1.1.0", contentHash: "sha256:…" }]
  },
  materialization: {
    ownerRole: "codifier",
    version: "0.4.0", contentHash: "sha256:…", status: "materialized",
    sections: ["tests", "implementation"],
    validatorRefs: ["wantware://validator/materialization"],
    basedOn: [{ stratum: "cognitive", version: "2.0.0", contentHash: "sha256:…" }]
  }
}
```

`sections` must partition the domain paths: a domain assigned to two strata is a
semantic validation error. `policies` must be assigned explicitly (§10.7).

### 4.1 Lifecycle statuses

```text
unstarted
capturing   → captured        source
formalizing → formalized      semantic
cognifying  → cognified       cognitive
codifying   → materialized    materialization

returned    the owner has an open revision request against this version
failed      the stratum's validators reject it
stale       an accepted upstream basis has changed
retired     superseded and no longer consumable
```

`formalizing` and `formalized` are lifecycle states. `returned` and `failed`
are outcomes. A `FormalizationFailure` or `return-to-formalization` is a path,
not a state synonym.

### 4.2 Envelope stage and status

`meta.stage` is an advisory summary naming the most advanced stage whose
stratum has been accepted: `conception`, `conceptualization`, `formalization`,
`cognification`, `codification`, `compilation`, or `computation`. It replaces
the earlier scalar `RefinementLevel`. The authoritative statuses live on the
strata; readiness lives in `readiness` (§5). `meta.status` is only
`draft | active | retired`.

---

## 5. Readiness

Boundedness and readiness are different questions, and an envelope records both.

```text
BOUNDED       Is the artifact honest about its scope and uncertainty?
              Required at every stage. It licenses carriage, not promotion.

FORMALIZABLE  May a Formalizer consume this conceptualization without inventing
              meaning? Subject, desired change, semantic authority, material
              constraints, and blocking ambiguities are explicit.

COGNIFIABLE   May a Cognifier consume this exact semantic version? It is ratified
              as policy requires; ontology, intent, invariants, constraints,
              success claims, warrants, and evidence obligations are well-formed;
              no semantic blocker remains.

CODIFIABLE    May a Codifier consume this exact mechanism design? Every in-scope
              claim maps through a terminating mechanism; capabilities,
              dependencies, information flow, failure modes, binding
              requirements, and evidence acquisition are sufficient; upstream
              hashes are current; no cognitive blocker remains. Concrete binding
              selection stays with the Codifier.
```

A readiness assessment is a first-class record bound to its subject and the
policy it was evaluated under:

```js
ReadinessAssessment = {
  id: "wantware://readiness/semantic-1.1.0/cognifiable",
  kind: "cognifiable",                       // bounded | formalizable | cognifiable | codifiable
  subject: { stratum: "semantic", version: "1.1.0", contentHash: "sha256:…" },
  policyRef: "wantware://policy/tier-2",
  internalClosure: "satisfied",              // not-assessed | satisfied | unsatisfied | waived
  externalAdequacy: "satisfied",
  ready: true,
  blocking: [],                              // [{ code, refs, detail }]
  advisory: [{ code: "ASSUMPTION_UNVERIFIED", refs: ["wantware://assumption/calendar-query-complete"] }],
  validatorRefs: ["wantware://validator/cognification-readiness"],
  evaluatedAt: "…", evaluatedByRef: "wantware://validator/cognification-readiness"
};
```

### 5.1 Internal closure is not external adequacy

```text
internalClosure   Is the output coherent, consistent, and resolved on its own terms?
externalAdequacy  Is the output faithful and sufficient to its authoritative input?
ready             May the next role rely on this exact output now?
```

A beautifully consistent mechanism can have internal closure while solving the
wrong problem. An intuitively adequate proposal can remain internally open
because a contradiction or blocking question is unresolved. `ready` may be true
only when both are `satisfied` or visibly `waived` and no blocking finding
remains. A waiver stays visible.

These readiness assessments judge the representation's fitness for a handoff.
They do not constitute a promise to deliver or permission to execute. The
engagement workflow must separately check the delivery commitment before
Directives are issued, their committer authorship, and applicable execution
authorization before Imperatives run. IR 0.3 does not serialize those checks.

Internal closure is deterministic: reference resolution, reachability, coverage,
consistency. External adequacy needs separate probes: source readback, domain
review, counterexamples, representative scenarios, user or operational
observation. A declared frame makes those challenges addressable; it does not
domesticate unknown unknowns.

### 5.2 When a gate fails, it fails concretely

```json
{
  "ready": false,
  "subject": { "stratum": "semantic", "version": "3", "contentHash": "sha256:…" },
  "blocking": [
    { "code": "SEMANTIC_AMBIGUITY", "refs": ["wantware://question/vid-to-uid"],
      "detail": "By what method does a Visitor become an Account? Blocks S5." },
    { "code": "SUCCESS_WITHOUT_EVIDENCE", "refs": ["wantware://success/attribute-conversion"] }
  ],
  "advisory": []
}
```

"What is preventing this IR from being codifiable?" receives a list, not a
request to "finish the design."

---

## 6. Ratifications

A ratification is an immutable attestation by the source authority (or its
recorded delegate) over an exact stratum binding. It is kept outside the object
it ratifies to avoid circularity.

```js
Ratification = {
  id: "wantware://ratification/semantic-1.1.0",
  subject: { stratum: "semantic", version: "1.1.0", contentHash: "sha256:…" },
  byRef: "wantware://role/client-partner",
  method: "explicit-readback",
  confirmationRefs: ["wantware://confirmation/readback-4"],
  at: "…"
};
```

Whether a stratum requires ratification before it is `cognifiable` is policy. A
Formalizer may never ratify its own reading.

Ratification confirms the represented meaning. A Commissive promises delivery
of its required truths; authorization grants permission for particular work.
Even if one actor performs all three acts, each needs its own explicit record.

---

## 7. Handoffs

A handoff is the acceptance record for one stratum's output by the next role. It
binds exact input and output, names the readiness assessment that licensed it,
and records the outcome.

```js
handoffs: {
  formalization: {                        // source → semantic
    input:  { stratum: "source",   version: "1.0.0", contentHash: "sha256:…" },
    output: { stratum: "semantic", version: "1.1.0", contentHash: "sha256:…" },
    status: "accepted",                   // pending | accepted | returned | failed | stale
    readinessRef: "wantware://readiness/semantic-1.1.0/cognifiable",
    ratificationRefs: ["wantware://ratification/semantic-1.1.0"],
    revisionRequestRefs: [],
    acceptedAt: "…"
  },
  cognification: { /* semantic → cognitive */ },
  codification:  { /* cognitive → materialization; optional pre-materialization */ }
}
```

The handoff is named by the transformation that produced its output. The
readiness it references is named by what that output is fit for:

| Handoff | Output | Readiness kind it references |
|---|---|---|
| `formalization` | semantic | `cognifiable` |
| `cognification` | cognitive | `codifiable` |
| `codification` | materialization | (compilability; validators on the materialization stratum) |

The `formalizable` assessment has no handoff of its own; it is the readiness of
the source stratum and is recorded in `readiness` with a `source` subject.

No downstream owner may edit an upstream stratum in place. It raises a revision
request (§8). Normal repair actions in failure policy are
`return-to-formalization` and `return-to-cognification`; `returned` and `failed`
are handoff outcomes.

An accepted handoff preserves the bound obligations; it neither creates a
delivery commitment nor identifies the author of issued Directives. A changed
semantic basis must also be checked against the separate engagement commitment;
do not silently transfer a promise or its instructions to a new contract hash.

---

## 8. Change Control

### 8.1 Cross-stratum bindings and staleness

```js
changeControl.bindings: [{
  id: "wantware://binding/cognitive-2.0.0-on-semantic-1.1.0",
  consumer: { stratum: "cognitive", version: "2.0.0", contentHash: "sha256:…" },
  provider: { stratum: "semantic",  version: "1.1.0", contentHash: "sha256:…" },
  status: "current",                      // current | stale | unverified
  affectedRefs: ["wantware://procedure/review-important-information",
                 "wantware://satisfaction-mapping/goal-1"],
  impact: "procedure nodes citing the calendar success claim"
}]
```

`affectedRefs` records the known node-level blast radius. Validation may expand
that set by traversing graph references. A wording change to one success claim
therefore does not automatically invalidate an unrelated artifact, while silent
reuse of an obsolete basis remains impossible.

### 8.2 Revision requests

The only way a downstream owner asks an upstream owner to change authoritative
content. It grants no mutation authority.

```js
RevisionRequest = {
  id: "wantware://revision/semantic-1.1.0/vid-uid",
  kind: "semantic-clarification-required",
  //    conceptual-clarification-required | semantic-clarification-required |
  //    semantic-change-required | mechanism-revision-required | binding-unavailable
  raisedByStratum: "cognitive",
  targetStratum: "semantic",
  against: { stratum: "semantic", version: "1.1.0", contentHash: "sha256:…" },
  reason: "No mechanism can attribute conversion without a declared Visitor→Account transition.",
  issueRefs: ["wantware://question/vid-to-uid"],
  affectedRefs: ["wantware://success/attribute-conversion"],
  requestedDisposition: "clarify",        // clarify | revise | rebind | change
  blocking: true,
  status: "open"                          // open | accepted | rejected | superseded | resolved
};
```

| Kind | Raised by → target | Meaning |
|---|---|---|
| `conceptual-clarification-required` | semantic → source | The reading cannot be formalized without inventing meaning |
| `semantic-clarification-required` | cognitive → semantic | A mechanism would have to choose a meaning the contract leaves open |
| `semantic-change-required` | any → semantic | The only viable repair alters intent, constraint, invariant, or success; needs source confirmation |
| `mechanism-revision-required` | materialization → cognitive | Meaning intact; procedure or architecture not workable |
| `binding-unavailable` | materialization → cognitive | No concrete dependency can realize a declared capability |

The upstream owner accepts, rejects, or resolves the request and, if necessary,
issues a new version and hash. Dependency bindings then identify stale consumers
and their `affectedRefs` give the initial blast radius for revalidation.

---

## 9. Source Stratum

### 9.1 Conception

Preserves the originating Expressive Want without overformalizing it.

```js
conception: {
  expression: "I don't want to miss anything important today.",
  motivatingState: "Important obligations can arrive through multiple information sources.",
  desiredDifference: "Important actionable information should reliably reach my attention.",
  notions: ["importance", "attention", "obligation", "timeliness"],
  sourceRefs: ["wantware://source/client/utterance-17"]
}
```

The Formalizer may interpret it. Only the source authority may replace or amend
it.

### 9.2 Conceptualization

Preserves the interpreter's reading of the conception before that reading
becomes semantic truth. It is a source-stratum artifact, not an unrecorded
prelude to Formalization.

```js
conceptualization: {
  statements: [{
    id: "wantware://concept/important-means-actionable",
    statement: "Important information is consequential, time-sensitive, or requires action.",
    disposition: "confirmed",            // proposed | confirmed | assumed | withdrawn | contested
    sourceRefs: ["wantware://source/client/utterance-17"],
    authoredByRef: "wantware://role/client-partner",
    confirmationRefs: ["wantware://confirmation/readback-4"]
  }],
  boundaries: ["Only configured information sources are in the initial frame."],
  roughPlans: ["Collect, classify, and surface qualifying information."],
  openQuestionRefs: ["wantware://question/conflicting-importance-signals"]
}
```

A `confirmed` statement must carry at least one confirmation reference.
`contested` preserves a conflict between source statements rather than forcing
a reading. `unasked` is not a disposition: it is a computed intake signal (the
loaded question set minus the questions actually asked) that belongs to the
front door, not to a statement.

The example's `roughPlans` are exploratory proposals, not issued Directives.
Assertive intake must also establish which sources are configured, what evidence
shows the current review state, and how the source describes the wanted state.
Unknown coverage remains unknown; confirmation of a reading does not prove a
claim about the external world.

---

## 10. Semantic Stratum

### 10.1 Intent

Intent converts conception into desired state without choosing how that state
will be produced.

Assertives establish the evidenced current state and the understood wanted
state. Declaratives then specify the required difference: in this example,
configured sources must be reviewed and important actionable items verifiably
surfaced within the agreed frame. The following intent expresses that obligation;
its desired state is not an assertion that fulfillment has already occurred.

```js
intent: {
  actors: [{ actorRef: "wantware://actor/user", role: "principal" }],
  goals: [{
    id: "wantware://goal/important-items-known",
    statement: "The principal becomes aware of important actionable information.",
    priority: 1,
    successCriteriaRefs: ["wantware://success/all-sources-reviewed",
                          "wantware://success/important-items-surfaced"]
  }],
  desiredStates: [{ id: "wantware://desired/review-complete",
                    subject: "wantware://state/configuredSources", predicate: "reviewed", value: true }],
  desiredChanges: [{ id: "wantware://change/awareness", from: { awareness: "unknown" }, to: { awareness: "sufficient" } }],
  preferences: [{ id: "wantware://preference/false-negatives", objective: "false negatives", direction: "minimize", weight: 3 }]
}
```

> Intent describes desired reality, not implementation.

### 10.2 Ontology

The semantic universe within which the intent can be reasoned about and
realized. It supports inheritance, composition, typing, relations, and
invariants.

```js
ontology: {
  entities: [
    { id: "wantware://entity/information-item", name: "InformationItem", abstract: true,
      properties: [{ name: "timestamp", type: "datetime" },
                   { name: "importance", type: "wantware://type/importance" },
                   { name: "requiresAction", type: "boolean" }] },
    { id: "wantware://entity/email", name: "Email", extends: ["wantware://entity/information-item"] },
    { id: "wantware://entity/person", name: "Person" }
  ],
  verbs: [
    { id: "wantware://verb/classify", name: "classify",
      subjectTypeRef: "wantware://entity/information-item",
      effects: [{ targetRef: "wantware://entity/information-item", operation: "set" }] },
    { id: "wantware://verb/notify", name: "notify",
      subjectTypeRef: "wantware://entity/person", objectTypeRef: "wantware://entity/information-item",
      effects: [{ targetRef: "wantware://entity/notification", operation: "create" }] }
  ],
  relations: [
    { id: "wantware://relation/sent-by", name: "sentBy",
      fromTypeRef: "wantware://entity/information-item", toTypeRef: "wantware://entity/person" }
  ],
  types: [{ id: "wantware://type/importance", name: "Importance", base: "enum", enum: ["low", "medium", "high"] }],
  invariants: [{ id: "wantware://invariant/no-silent-omission",
                 condition: "no configured source is silently omitted", severity: "error" }]
}
```

The ontology answers: what kinds of things and transformations are meaningful
here?

### 10.3 State

Ontology defines what things are. State defines what states mean and what is
currently believed about particular things. State meanings, legal distinctions,
and invariants belong to the contract; a procedure for reaching or observing them
does not.

```js
state: {
  meanings: [{ id: "wantware://state-meaning/reviewed", name: "Reviewed",
               meaning: "every available item from the source has been evaluated within the frame" }],
  variables: [{ id: "wantware://state/configuredSources", name: "configuredSources",
                type: { collection: "set", of: "wantware://entity/information-source" } }],
  epistemicStates:   ["KNOWN", "KNOWN_ABSENT", "UNKNOWN", "AMBIGUOUS"],
  acquisitionStates: ["NOT_QUERIED", "ACQUIRED", "UNAVAILABLE", "TOOL_FAILED", "OBSERVATION_FAILED", "NOT_APPLICABLE"]
}
```

State distinguishes ontological values from epistemic confidence:

```js
{ value: null, epistemicState: "UNKNOWN" }        // must differ from
{ value: [],   epistemicState: "KNOWN_ABSENT" }
```

Epistemic state and acquisition status are orthogonal (Wantware.md §5.4). A
failed tool call must not be collapsed into `UNKNOWN`; `KNOWN_ABSENT` must never
be inferred from a successful transport.

State definitions are not themselves observations. Assertives about particular
current values require attributable evidence records (§14), with assumptions and
open questions retained explicitly. Comparing that account with `desiredStates`
and `desiredChanges` makes the gap addressable without treating a target as fact.

### 10.4 Frame, assumptions, open questions

```js
frame: {
  statement: "Configured information sources, evaluated in the client's locale over the configured review window.",
  inScope: ["email", "calendar", "tasks"],
  outOfScope: ["chat messages until Q-1 is resolved"],
  contextRefs: []
},
assumptions: [{ id: "wantware://assumption/calendar-query-complete",
                statement: "A provider query with no pagination cursor returns every event in the window.",
                status: "unverified",      // unverified | verified | rejected | tolerated
                impact: "coverage claim", evidenceContractRefs: [] }],
openQuestions: [{ id: "wantware://question/conflicting-importance-signals",
                  question: "How should conflicting importance signals be resolved?",
                  impact: "classification policy", blocking: false, resolutionRefs: [] }]
```

A frame declares the boundary within which claims hold. Internal closure is
consistency relative to that frame, never external completeness. Every blocking
question must be resolved before the semantic stratum can be `cognifiable`.

### 10.5 Constraints

Constraints describe what may not be violated. Their meaning and priority are
owned by the Formalizer; the Cognifier selects a mechanism that satisfies them.

```js
constraints: [
  { id: "wantware://constraint/no-external-disclosure", kind: "hard",
    rule: "private information is not transmitted to unauthorized systems" },
  { id: "wantware://constraint/no-assumed-success", kind: "hard",
    rule: "an action requiring verification does not transition directly to VERIFIED" },
  { id: "wantware://constraint/cost", kind: "soft", rule: "minimize cost", weight: 0.3,
    description: "subordinate to correctness" }
]
```

This gives the Cognifier a constraint-satisfaction problem without authority to
relax the constraints.

### 10.6 Success criteria

Success is expressed separately from procedures so that different procedures can
satisfy the same intent.

```js
success: {
  criteria: [
    { id: "wantware://success/all-sources-reviewed",
      claim: "Every configured source was reviewed.",
      condition: "configuredSources subsetOf reviewedSources",
      evidenceContractRefs: ["wantware://evidence/source-reviewed"], required: true },
    { id: "wantware://success/important-items-surfaced",
      claim: "Every important item was verifiably surfaced.",
      condition: { operator: "every", arguments: [
        { ref: "wantware://state/importantItems" },
        { operator: "equals", arguments: [{ ref: "wantware://property/notification.status" }, "VERIFIED"] } ] },
      evidenceContractRefs: ["wantware://evidence/notification-delivered"], required: true }
  ],
  aggregate: { operator: "all", criterionRefs: ["wantware://success/all-sources-reviewed",
                                               "wantware://success/important-items-surfaced"] }
}
```

### 10.7 Evidence contracts

Every meaningful claim about execution is grounded in an evidence contract. The
Formalizer owns the claim and the observable properties required to establish
it. It does not choose the tool, query, API, observer, or procedural step that
will acquire them.

```js
evidence: {
  contracts: [{
    id: "wantware://evidence/calendar-reviewed",
    claim: "Calendar was successfully reviewed.",
    requirements: [
      { id: "wantware://evidence/calendar-reviewed/query-completed",
        condition: "a complete calendar query was performed" },
      { id: "wantware://evidence/calendar-reviewed/result-known",
        condition: "the result epistemic state is KNOWN or KNOWN_ABSENT" }
    ],
    aggregate: "all"
  }]
}
```

An `EvidenceRequirement` contains a condition and, optionally, a required
confidence. A planned source or tool does not belong there.

**Policies.** The `policies` domain may hold either semantic rules (what
permissible reality is) or cognitive selection rules (which of several valid
mechanisms to prefer). Its stratum must therefore be declared explicitly in
`strata.*.sections` for each graph; new models should prefer a less ambiguous
domain when the distinction matters.

### 10.8 Satisfaction cases and warrants

A satisfaction case is the Formalizer-owned argument connecting one or more
success criteria to evidence contracts through an explicit warrant.

```js
satisfactionCases: [{
  id: "wantware://satisfaction/calendar-reviewed",
  successCriterionRefs: ["wantware://success/all-sources-reviewed"],
  warrant: {
    rule: "a complete query with a KNOWN or KNOWN_ABSENT result establishes that the configured calendar was reviewed",
    mode: "hybrid",                        // executable | reviewed | hybrid
    assumptionRefs: ["wantware://assumption/calendar-query-complete"],
    evaluatorRef: "wantware://evaluator/coverage"      // semantic evaluator; its binding is materialization
  },
  evidenceContractRefs: ["wantware://evidence/calendar-reviewed"],
  independenceRequirement: "policy-dependent",
  //  self-permitted | policy-dependent | independent-required | dual-review-required
  frameRefs: ["wantware://frame/configured-calendars"],
  defeaterRefs: []
}]
```

The case references the canonical criterion rather than copying its claim. The
warrant may be executable, reviewed, or hybrid, and may declare frames,
assumptions, and known defeaters. This preserves three layers:

```text
EVIDENCE REQUIREMENT   what must be observed                 Formalizer
OBSERVATION MECHANISM  how that observation can be acquired  Cognifier
CONCRETE BINDING       which tool/query/test realizes it     Codifier
```

Runtime evidence is evaluated against the case. An acquired observation can still
fail to establish the claim if the warrant is inadequate, a defeater applies, the
semantic binding is stale, or the required observer independence is absent.

---

## 11. Cognitive Stratum

### 11.1 Mechanisms: candidates and selection

The Cognifier preserves alternatives long enough to make selection an
inspectable decision rather than an unexplained overwrite.

```js
mechanisms: {
  candidates: [{
    id: "wantware://mechanism/provider-polling", name: "Provider polling",
    status: "selected",                    // candidate | selected | rejected
    architectureRef: "wantware://architecture/review-service",
    procedureRefs: ["wantware://procedure/review-important-information"],
    capabilityRefs: ["wantware://capability/read-email", "wantware://capability/read-calendar"],
    dependencyRefs: ["wantware://dependency/provider-access"],
    failureTypeRefs: ["wantware://failure/provider-unavailable"],
    decisionRefs: ["wantware://decision/select-provider-polling"]
  }],
  selectedRef: "wantware://mechanism/provider-polling"
}
```

Selection does not alter the contract it is intended to satisfy or constitute a
delivery commitment. Feasibility findings can inform a later Commissive; an
issued Directive must be authored by the actor making that commitment, with
explicitly attributable assistance through the Cognifier role (§2.1.2).

### 11.2 Architecture

```js
architecture: {
  id: "wantware://architecture/review-service", name: "Review service",
  components: [
    { id: "wantware://component/source-adapters", name: "SourceAdapters",
      responsibility: "return explicit available, unavailable, or failed status per source",
      capabilityRefs: ["wantware://capability/read-email", "wantware://capability/read-calendar"] },
    { id: "wantware://component/classifier", name: "ImportanceClassifier", responsibility: "assign importance" }
  ],
  interactions: [{ fromRef: "wantware://component/source-adapters", toRef: "wantware://component/classifier",
                   description: "normalized items" }]
}
```

### 11.3 Capabilities

Capabilities are abilities the Cognifier proposes to use to affect or observe the
modeled world. They belong to the cognitive realization; the verbs and effects
whose meanings they implement remain semantic. They do not identify
implementation functions.

```js
capabilities: [
  { id: "wantware://capability/read-email", name: "readEmail", kind: "observe",
    verbRef: "wantware://verb/read",
    inputs: [{ name: "query", type: "wantware://type/email-query" }],
    outputs: [{ name: "items", type: { collection: "array", of: "wantware://entity/email" } }],
    effects: [{ targetRef: "wantware://state/emailObservation", operation: "set" }] },
  { id: "wantware://capability/notify-person", name: "notifyPerson", kind: "act",
    verbRef: "wantware://verb/notify",
    effects: [{ targetRef: "wantware://entity/notification", operation: "create" }] }
]
```

Later codification binds `readEmail` to Gmail, Microsoft Graph, IMAP, a test
fixture, or a mock, without changing the cognified procedure or its semantic
contract.

### 11.4 Procedures are graphs

Procedures are Cognifier-owned strategies for transforming state under the
Formalizer-owned contract. They are node/edge graphs, not ordered step arrays, so
branching, parallelism, loops, retry, waiting, human approval, escalation,
compensation, nested procedures, and termination stay representable.

For the running example, a separate engagement record first identifies the
delivery actor committing to review the configured sources and surface qualifying
items under the contract's access, review-window, and verification conditions.
That actor then authors the Directive: collect each configured source, classify
its items, surface qualifying items, and acquire evidence for both required
success claims. The Cognifier records its procedure design; Codification and
Compilation realize its operations as Imperatives. A design may be drafted
before the promise, but must not be treated as issued instructions on that basis.

```js
procedures: [{
  id: "wantware://procedure/review-important-information", name: "ReviewImportantInformation",
  intentRefs: ["wantware://goal/important-items-known"],
  inputs: [{ name: "configuredSources", type: { collection: "set", of: "wantware://entity/information-source" } }],
  preconditions: ["configuredSources is KNOWN"],
  nodes: [
    { id: "wantware://procedure/review/node/collect",  kind: "observation", capabilityRef: "wantware://capability/read-email",
      outputs: { observedItems: "wantware://state/observedItems" } },
    { id: "wantware://procedure/review/node/classify", kind: "transform",   verbRef: "wantware://verb/classify" },
    { id: "wantware://procedure/review/node/gate",     kind: "decision",    condition: "item.importance >= policy.importanceThreshold" },
    { id: "wantware://procedure/review/node/surface",  kind: "action",      capabilityRef: "wantware://capability/notify-person" },
    { id: "wantware://procedure/review/node/done",     kind: "terminate" }
  ],
  edges: [
    { fromRef: "wantware://procedure/review/node/collect",  toRef: "wantware://procedure/review/node/classify" },
    { fromRef: "wantware://procedure/review/node/classify", toRef: "wantware://procedure/review/node/gate" },
    { fromRef: "wantware://procedure/review/node/gate",     toRef: "wantware://procedure/review/node/surface", condition: "true" },
    { fromRef: "wantware://procedure/review/node/gate",     toRef: "wantware://procedure/review/node/done",    condition: "false" },
    { fromRef: "wantware://procedure/review/node/surface",  toRef: "wantware://procedure/review/node/done" }
  ],
  entryNodeRefs: ["wantware://procedure/review/node/collect"],
  exitNodeRefs:  ["wantware://procedure/review/node/done"],
  postconditions: ["all configured sources have explicit observation states",
                   "all observed items have classifications",
                   "all qualifying items have notification outcomes"],
  successCriteriaRefs: ["wantware://success/all-sources-reviewed"]
}]
```

Node kinds: `action`, `observation`, `decision`, `transform`, `procedure`,
`parallel`, `join`, `wait`, `emit`, `terminate`. An `action` or `observation`
node must name a capability or verb; a `procedure` node must name a procedure; a
`decision` node must carry a condition.

Procedures say what sequence should happen. Policies say what rules govern
decisions within that sequence.

The graph above sketches the per-item path, not a complete all-source review or
proof of fulfillment. A ready design must also specify source/item iteration,
acquisition and classification failures, notification verification, and the
aggregate evidence checks. Reaching `done` alone does not discharge the
Directive or the commitment. Those paths must support the stated postconditions
and both criteria before the design is `codifiable`.

### 11.5 Dependencies and failures

```js
dependencies: [{ id: "wantware://dependency/provider-access", name: "provider access",
                 kind: "external", required: true }],
failures: {
  types: [{ id: "wantware://failure/provider-unavailable", name: "ProviderUnavailable", originLayer: "computation" },
          { id: "wantware://failure/ontology-mismatch",    name: "OntologyMismatch",    originLayer: "formalization" }],
  policies: [{ id: "wantware://failure-policy/provider", onFailureTypeRef: "wantware://failure/provider-unavailable",
               action: "retry", maxAttempts: 3 },
             { id: "wantware://failure-policy/ontology", onFailureTypeRef: "wantware://failure/ontology-mismatch",
               action: "return-to-formalization" }]
}
```

Failure origin layers: `conception`, `conceptualization`, `formalization`,
`cognification`, `codification`, `compilation`, `computation`, `observation`.
Failure policy actions: `retry`, `abort`, `compensate`, `escalate`,
`return-to-conceptualization`, `return-to-formalization`,
`return-to-cognification`, `request-evidence`, `remain-incomplete`.

Failures are explicit artifacts, not exceptions disappearing into logs. A return
is addressed to the owner of the defective stratum; discovery by a downstream
role does not transfer authority.

### 11.6 Observation plan

The Cognifier owns the proposed mechanism by which each semantic evidence
requirement will be acquired.

```js
observationPlan: {
  mechanisms: [{
    id: "wantware://observation/calendar-query",
    name: "Query the calendar provider and inspect the complete response",
    evidenceRequirementRefs: ["wantware://evidence/calendar-reviewed/query-completed",
                              "wantware://evidence/calendar-reviewed/result-known"],
    capabilityRef: "wantware://capability/read-calendar",
    procedureNodeRef: "wantware://procedure/review/node/collect",
    observerRef: "wantware://actor/calendar-observer",
    independence: "independent",           // independent | self-reported | not-applicable
    failureTypeRefs: ["wantware://failure/provider-unavailable"]
  }]
}
```

### 11.7 Satisfaction mappings

```js
satisfactionMappings: [{
  id: "wantware://satisfaction-mapping/goal-1",
  goalRef: "wantware://goal/important-items-known",
  successCriterionRefs: ["wantware://success/all-sources-reviewed", "wantware://success/important-items-surfaced"],
  mechanismRef: "wantware://mechanism/provider-polling",
  procedureRefs: ["wantware://procedure/review-important-information"],
  rationale: "A complete provider query satisfies coverage with the least dependency risk."
}]
```

No mechanism is credited with satisfying a claim without that claim's evidence
requirements having an observation mechanism.

---

## 12. Materialization Stratum

The Codifier-owned stratum supplies concrete bindings and content-addressed
artifacts for the selected, cognified mechanism.

```js
implementation: {
  requirements: ["must support idempotent retries", "must persist execution evidence",
                 "must preserve epistemic state distinctions"],
  preferences: { language: ["TypeScript", "Rust"], runtime: "local-first" },
  bindings: [{
    semanticRef: "wantware://capability/read-email",
    bindingKind: "api",                    // source | function | tool | api | service | database | model | runtime | external
    target: "gmail.users.messages.list",
    configuration: { scope: "readonly" },
    derivedFromRefs: ["wantware://capability/read-email", "wantware://observation/email-query"]
  }],
  sourceArtifacts: [{ id: "wantware://artifact/src/adapters/gmail", kind: "source",
                      location: "src/adapters/gmail/readEmail.ts", contentHash: "sha256:…",
                      derivedFromRefs: ["wantware://capability/read-email"] }],
  testArtifacts: [], buildArtifacts: []
}
```

Every binding identifies the graph nodes it materializes. Every artifact records
a content hash and `derivedFromRefs`. The stratum itself binds the exact
cognitive version and hash it implements.

These artifacts realize the Imperatives required by the committer's Directives.
They do not create the commitment or authorize their own execution. Binding and
artifact validation must preserve the required truths rather than replacing them
with whatever the generated code happens to do.

### 12.1 Tests

Graph-level test scenarios state what must be tested; they derive from ontology,
procedures, invariants, evidence contracts, and success criteria. Executable test
files and their hashes are materialized artifacts.

```js
tests: [
  { id: "wantware://test/no-calendar-events", name: "empty calendar",
    procedureRef: "wantware://procedure/review-important-information",
    given: { calendarEvents: [] },
    expect: ["acquisitionStatus == ACQUIRED", "epistemicState == KNOWN_ABSENT",
             "CalendarReviewed == true", "fabrication == false"],
    successCriterionRefs: ["wantware://success/all-sources-reviewed"] },
  { id: "wantware://test/provider-failure", name: "provider unavailable",
    given: { calendarProvider: "unavailable" },
    expect: ["acquisitionStatus == OBSERVATION_FAILED", "epistemicState == UNKNOWN",
             "CalendarReviewed == false"] }
]
```

The implementation and its tests derive from the same graph, from different
authoritative nodes. This avoids both implementation-defined success and tests
that merely mirror the code.

---

## 13. Provenance and Decisions

Provenance records who made a definition or decision and from which nodes it was
derived. It does not blur authority between strata.

```js
provenance: {
  derivedFrom: ["wantware://source/client/utterance-17"],
  decisions: [
    { id: "wantware://decision/importance-definition",
      decision: "Importance is time-sensitivity, consequence, or required action.",
      rationale: "Time-sensitive actionable items were identified as the primary risk.",
      madeByRef: "wantware://role/formalizer", confidence: 0.82 },
    { id: "wantware://decision/select-provider-polling",
      decision: "Select provider polling over push subscriptions.",
      rationale: "A complete provider query satisfies coverage with the least dependency risk.",
      madeByRef: "wantware://role/cognifier", confidence: 0.77 }
  ]
}
```

Cognitive selection rationales are decision records referenced by candidate or
selected mechanisms. Open questions and assumptions live in their own semantic
domains, not in provenance. The representation thereby keeps fact, assumption,
decision, interpretation, and unresolved question distinct.

---

## 14. Runtime: Evidence Records and Traces

### 14.1 Evidence records

```js
EvidenceRecord = {
  id: "wantware://evidence-record/392",
  contractRef: "wantware://evidence/calendar-reviewed",
  observerRef: "wantware://actor/calendar-observer",
  independence: "independent",
  sourceRef: "wantware://source/calendar-provider",
  attemptedAt: "…", observedAt: "…",
  acquisitionStatus: "ACQUIRED",
  epistemicState: "KNOWN",
  value: { eventCount: 3 },
  confidence: 1.0,
  provenanceRef: "wantware://trace/exec-17/event/4"
};
```

Every record carries both axes and names its observer. `acquisitionStatus`
records whether an attempt was made and what happened; `epistemicState` records
what the result warrants believing. Neither substitutes for the other, and the
observer is what makes independence computable.

### 14.2 The establishment rule

```js
establishes(satisfactionCase, evidenceRecords, policy) => ({
  established,          // boolean
  epistemicState,       // KNOWN | KNOWN_ABSENT | UNKNOWN | AMBIGUOUS
  acquisitionStatus,    // worst acquisition status among required records
  missing,              // evidence requirements with no adequate record
  warrantStatus,        // executed | reviewed | pending-review | defeated
  independenceStatus,   // satisfied | self-only | not-required
  bindingStatus         // current | stale
})
```

Deterministic where the warrant is executable; explicitly reviewable where it is
not. `established` is false whenever any required evidence is unknown, ambiguous,
unavailable, not queried, or failed; whenever the warrant is defeated or pending
required review; whenever the semantic binding is stale; or whenever required
independence is absent.

### 14.3 Execution trace

```js
ExecutionTrace = {
  executionId: "…", irVersion: "0.3",
  stratumBindings: {
    semantic:        { version: "1.1.0", contentHash: "sha256:…" },
    cognitive:       { version: "2.0.0", contentHash: "sha256:…" },
    materialization: { version: "0.4.0", contentHash: "sha256:…" }
  },
  procedureRef: "wantware://procedure/review-important-information",
  events: [
    { type: "STEP_STARTED", nodeRef: "wantware://procedure/review/node/collect" },
    { type: "CAPABILITY_RESULT", capabilityRef: "wantware://capability/read-calendar",
      acquisitionStatus: "ACQUIRED", epistemicState: "KNOWN", evidenceRef: "wantware://evidence-record/392" },
    { type: "POSTCONDITION_VERIFIED", nodeRef: "wantware://procedure/review/node/collect" }
  ],
  successEvaluation: { /* per criterion: establishes() result */ }
};
```

This closes the execution/evidence portion of the loop: issued Directives →
materialized Imperatives → computation → trace → evidence → evaluation against
the bound Declaratives → comparison with the original Expressive Want.
The exact stratum bindings lead back through the semantic contract to its source;
the separate engagement records connect that contract, commitment, and issued
instructions. A successful step or criterion does not establish that whole chain.

Determinism belongs to the process contracts: explicit inputs, state, obligations,
checks, and defined success, failure, retry, revision, and escalation branches.
A probabilistic classifier or generator can participate, but its outputs must
pass the applicable checks. It cannot make uncertain evidence sufficient by
declaring itself done. If evidence or external conditions prevent fulfillment,
record the unmet obligation and revisit the appropriate owner and commitment;
never redefine the Want to fit the output.

---

## 15. Expressions

The IR accepts both human-readable and structured expressions:

```json
{ "condition": "every importantItem has notification.status == VERIFIED" }
```

```json
{ "condition": { "operator": "every", "arguments": [
    { "ref": "wantware://state/importantItems" },
    { "operator": "equals", "arguments": [ { "ref": "wantware://property/notification.status" }, "VERIFIED" ] } ] } }
```

This gives a progressive path from readable semantic expression through
formalization to a structured expression tree without forcing a complete
expression language before representative cases reveal its needs. The Agency plan
derives that language from three encodings (D-13).

---

## 16. Validation Lifecycle and Profiles

```text
SOURCE CAPTURE                     Preserve the Expressive Want.
    ↓
CONCEPTUALIZATION                  Separate Assertive evidence, readings, and unknowns.
    ↓
JSON SCHEMA VALIDATION              Is this structurally valid WantwareIR?
    ↓
formalizable()                      May the Formalizer consume the source?
    ├── not ready → interpreter / source authority
    ↓
FORMALIZATION                      State the Declarative required truths.
    ↓
SEMANTIC VALIDATION                 Does the formalized world make logical sense?
RATIFICATION (as policy requires)
cognifiable()                       Is meaning closed, adequate, and ratified as required?
    ├── not ready → Formalizer
    ↓
COMMITMENT / DIRECTIVE ISSUANCE     Separate engagement records; not 0.3 schema gates.
                                    Accountable actor commits to the bound Declaratives,
                                    then authors the Directives through Cognification.
    ├── missing or invalid → remain a proposal; resolve with delivery actor
    ↓
COGNIFICATION                      Feasibility exploration may precede commitment;
                                    issued work must retain that later commitment link.
    ├── semantic defect → revision request to Formalizer
    ↓
codifiable()                        Is the mechanism closed and adequate to the contract?
    ├── not ready → Cognifier
    ↓
CODIFICATION / MATERIALIZATION
    ↓
BINDING AND ARTIFACT VALIDATION     Is every consumer based on the exact current provider?
    ↓
COMPILATION                        Realize the designed operations as executable Imperatives.
    ↓
EXECUTION AUTHORIZATION             Separate permission check, not a Commissive.
    ↓
COMPUTATION / OBSERVATION / SUCCESS EVALUATION
                                    Do observed reality and the applicable warrants
                                    establish the committed required truths and original Want?
```

This diagram combines current IR validation boundaries with required engagement
workflow checks. The latter are explicit process obligations; they are not
implemented by the 0.3 envelope's readiness or ratification records (§2.1.2).

### 16.1 Formalization profile (the `cognifiable` checklist)

```js
const FormalizationProfile = {
  source: [
    "The semantic stratum binds the exact current source version and hash.",
    "Material source expressions remain preserved and traceable.",
    "The conceptualized reading remains distinct from raw conception and formal intent.",
    "Evidenced current state, intended state, and required truths remain distinguishable."
  ],
  references: ["Every semantic *Ref resolves to an object of the appropriate type."],
  meaning: [
    "Terms needed by goals, constraints, state, and success have definitions.",
    "Ontology inheritance is acyclic and relation endpoints resolve.",
    "Hard constraints and invariants are mutually consistent.",
    "Every entity state a success criterion asserts is reachable by some declared verb.",
    "Every success state has a declared transition or an explicitly unresolved required behavior."
  ],
  success: [
    "Every required goal maps to at least one required success criterion.",
    "Every success criterion states a claim and a testable condition.",
    "Every proof-bearing success claim maps to an explicit satisfaction case."
  ],
  evidence: [
    "Every claim that requires evidence references an evidence contract.",
    "Evidence requirements say what must be observed, not how to observe it.",
    "Every satisfaction case states why its evidence warrants its referenced claim.",
    "Assertives about current reality cite evidence or remain explicit assumptions or unknowns."
  ],
  uncertainty: [
    "A frame is declared.",
    "Assumptions and open questions are explicit.",
    "Every blocking question is resolved before status becomes formalized."
  ],
  readiness: [
    "Internal closure and external adequacy are independently assessed.",
    "Ratification exists where policy requires it."
  ]
};
```

### 16.2 Cognification profile (the `codifiable` checklist)

```js
const CognificationProfile = {
  basis: [
    "The cognitive stratum binds the accepted semantic version and hash.",
    "The Cognifier has not changed semantic content in place."
  ],
  selection: [
    "selectedRef resolves to exactly one selected candidate.",
    "Selection rationale and rejected alternatives remain inspectable."
  ],
  architecture: [
    "Components, procedures, capabilities, and dependencies resolve.",
    "Every procedure action resolves to an ontology verb or capability.",
    "Every required execution path reaches a valid exit or termination state.",
    "Procedure recursion is explicitly permitted where present."
  ],
  satisfaction: [
    "Every required goal and criterion maps to the selected mechanism.",
    "No mechanism is credited with satisfying a claim without its evidence requirements.",
    "Procedure completion does not replace the Declarative success criteria."
  ],
  observation: [
    "Every evidence requirement maps to at least one observation mechanism.",
    "Observer independence is declared where self-certification matters.",
    "Acquisition failure modes are explicit."
  ],
  feasibility: [
    "Every required capability has a binding requirement or declared external dependency with a feasible realization strategy."
  ],
  readiness: ["Internal closure and external adequacy are independently assessed."]
};
```

### 16.3 Codifiability profile (materialization validators)

```js
const CodifiabilityProfile = {
  basis: [
    "Formalization and cognification handoffs are accepted and current.",
    "The materialization stratum binds the exact cognitive version and hash."
  ],
  implementation: [
    "Every required capability has a concrete binding or declared external runtime dependency.",
    "Every binding identifies the graph nodes it materializes.",
    "Every artifact records a content hash and derivedFromRefs."
  ],
  tests: [
    "Executable tests trace to semantic success/evidence and cognitive procedure nodes.",
    "Generated tests do not redefine success to match the implementation."
  ]
};
```

### 16.4 The gate sequence

```js
if (!ready(ir, 'formalizable')) returnToSource();
else if (!ready(ir, 'cognifiable')) returnToFormalization();
else if (!ready(ir, 'codifiable'))  returnToCognification();
else if (!validate(ir, CodifiabilityProfile)) remainUncodifiable();
```

This is the IR validation portion only. Before issuing Directives, the separate
engagement workflow must verify a current accountable commitment to the exact
semantic obligations and authorship by that committer. Before executing
Imperatives, it must check the issued instructions and applicable authorization.
Until the coordinated contract amendment in §2.1.2 exists, passing the gates
above cannot prove those engagement facts.

Together these boundaries distinguish formalizing what is required, committing
to deliver it, authoring the work, and realizing and executing that work.

---

## 17. The Graph and the Core Chain

Although JSON is the serialization, the IR is one graph. Strata assign authority
to subgraphs; they do not create disconnected files.

The existing representation connects meaning, realization, and evidence as below.
This graph is not the complete speech act workflow: the commitment and issued
Directive links remain separate engagement records in 0.3 (§2.1.2).

```text
Intent
  ├────requires────→ SuccessCriterion ←────argues──── SatisfactionCase ──requires──→ EvidenceContract
  ├────references──→ OntologyEntity                                                        │
  └────satisfiedBy→ SatisfactionMapping                                                    │
                         └────selects────→ Mechanism                                       │
                                              ├────realizedBy→ Procedure                   │
                                              └────uses──────→ Capability ←──uses── ObservationMechanism
                                                                    │                      ▲
                                                                 boundTo               acquires
                                                                    ▼                      │
                                                          ImplementationBinding       EvidenceRequirement
Procedure ──produces──→ EvidenceRecord ──supports──→ SuccessCriterion
```

The IR's represented nodes support the following conceptual process chain.
`COMMITMENT` and `DIRECTIVE` below describe engagement acts, not new 0.3 fields:

```js
const Core = {
  WANT:                 "A preferable difference in reality.",
  ASSERTIVE_ACCOUNT:    "Evidenced current and understood wanted states, with uncertainty explicit.",
  INTENT:               "A structured desired state.",
  ONTOLOGY:             "The universe in which the state has meaning.",
  DECLARATIVE:          "Required truths that bridge the current/wanted gap.",
  EVIDENCE_REQUIREMENT: "An observable property required to establish a claim.",
  COMMITMENT:           "An accountable actor's promise to deliver the bound required truths.",
  DIRECTIVE:            "Instructions authored by that committer to make those truths hold.",
  MECHANISM:            "A selected architecture and path through that universe.",
  OBSERVATION_PLAN:     "A proposed means of acquiring the required observations.",
  MATERIALIZATION:      "Concrete executable bindings and artifacts for the mechanism.",
  EVIDENCE_RECORD:      "An acquired observation with distinct acquisition and epistemic states.",
  SUCCESS:              "A rule determining whether evidence proves intent satisfied."
};
```

```text
EXPRESSIVE WANT → ASSERTIVE ACCOUNT OF CURRENT / WANTED STATES
     → DECLARATIVE REQUIRED TRUTHS + SUCCESS CLAIMS + EVIDENCE REQUIREMENTS
     → COMMISSIVE DELIVERY COMMITMENT [separate engagement record in 0.3]
     → COMMITTER-AUTHORED DIRECTIVES [issuance/authorship not modeled in 0.3]
       backed by SELECTED MECHANISM + OBSERVATION PLAN
     → MATERIALIZATION / COMPILATION → EXECUTED IMPERATIVES → REALITY
     → EVIDENCE RECORDS → REQUIRED TRUTHS ESTABLISHED? → ORIGINAL WANT SATISFIED?
```

The graph supports this chain without yet encoding all of its engagement links.
Procedure and success stay separate; capability is cognitive and
implementation-independent; evidence requirement
stays separate from observation mechanism; and no role repairs an upstream
discovery by rewriting upstream truth. Ratification, commitment, Directive
authorship, execution authorization, and evidence of fulfillment also remain
distinct even when the same actor performs several of them.

```js
const WantwareKernel = {
  source:          "Why does change seem desirable, and what was actually expressed?",
  semantic:        "What is known, what is wanted, what must become true, and what would establish success?",
  cognitive:       "What proposed or committer-directed mechanism can produce and observe that change?",
  materialization: "What executable bindings and artifacts realize the mechanism?",
  evidence:        "What was observed, how was it acquired, and what does it establish?"
};
```

OR

As conceptual process questions, rather than envelope property names:

```js
const WantwareKernel = {

  conception: "Why does change seem desirable?",
  assertiveAccount: "What current and wanted states are evidenced, assumed, or uncertain?",
  intent: "What required truths bridge the difference?",
  commitment: "Who explicitly commits to delivering those truths? (Separate engagement record in 0.3.)",
  directive: "What instructions does that committer author? (No dedicated issuance/authorship link in 0.3.)",
  ontology: "What things and transformations have meaning?",
  capability: "What means of observation or causation exist?",
  procedure: "What proposed path can produce the desired state?",
  evidence: "What observations establish what happened?",
  success: "What evidence establishes that intent was satisfied?"
};
```

---

## 18. Minimal Envelope

The smallest structurally valid 0.3 envelope, at the point where Formalization
has begun but nothing is yet cognifiable:

```json
{
  "meta": {
    "id": "wantware://example/example-system",
    "name": "Example System",
    "version": "0.3.0",
    "irVersion": "0.3",
    "stage": "formalization",
    "status": "draft"
  },
  "strata": {
    "source": {
      "ownerRole": "source-authority",
      "version": "1",
      "contentHash": "sha256:0000000000000000000000000000000000000000000000000000000000000000",
      "status": "captured",
      "sections": ["conception", "conceptualization"],
      "validatorRefs": ["wantware://validator/source"]
    },
    "semantic": {
      "ownerRole": "formalizer",
      "version": "1",
      "contentHash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
      "status": "formalizing",
      "sections": ["intent", "ontology", "evidence", "success", "satisfactionCases"],
      "validatorRefs": ["wantware://validator/semantic"],
      "basedOn": [
        { "stratum": "source", "version": "1",
          "contentHash": "sha256:0000000000000000000000000000000000000000000000000000000000000000" }
      ]
    },
    "cognitive": {
      "ownerRole": "cognifier",
      "version": "0",
      "contentHash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
      "status": "unstarted",
      "sections": ["capabilities", "procedures"],
      "validatorRefs": ["wantware://validator/cognitive"]
    },
    "materialization": {
      "ownerRole": "codifier",
      "version": "0",
      "contentHash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
      "status": "unstarted",
      "sections": ["implementation"],
      "validatorRefs": ["wantware://validator/materialization"]
    }
  },
  "readiness": [
    {
      "id": "wantware://readiness/source-1/formalizable",
      "kind": "formalizable",
      "subject": { "stratum": "source", "version": "1",
                   "contentHash": "sha256:0000000000000000000000000000000000000000000000000000000000000000" },
      "internalClosure": "satisfied",
      "externalAdequacy": "satisfied",
      "ready": true,
      "blocking": [],
      "advisory": [],
      "validatorRefs": ["wantware://validator/formalizable"]
    }
  ],
  "ratifications": [],
  "handoffs": {
    "formalization": {
      "input":  { "stratum": "source",   "version": "1",
                  "contentHash": "sha256:0000000000000000000000000000000000000000000000000000000000000000" },
      "output": { "stratum": "semantic", "version": "1",
                  "contentHash": "sha256:1111111111111111111111111111111111111111111111111111111111111111" },
      "status": "pending"
    },
    "cognification": {
      "input":  { "stratum": "semantic",  "version": "1",
                  "contentHash": "sha256:1111111111111111111111111111111111111111111111111111111111111111" },
      "output": { "stratum": "cognitive", "version": "0",
                  "contentHash": "sha256:2222222222222222222222222222222222222222222222222222222222222222" },
      "status": "pending"
    }
  },
  "conception": { "expression": "What is wanted?" },
  "conceptualization": {
    "statements": [
      {
        "id": "wantware://concept/example-reading",
        "statement": "The desired difference should become an observable state.",
        "disposition": "proposed",
        "sourceRefs": ["wantware://example/example-system"],
        "authoredByRef": "wantware://role/client-partner"
      }
    ]
  },
  "intent": {
    "goals": [
      { "id": "wantware://goal/example",
        "statement": "The desired difference becomes true.",
        "successCriteriaRefs": ["wantware://success/example"] }
    ]
  },
  "ontology": { "entities": [], "verbs": [], "relations": [] },
  "capabilities": [],
  "procedures": [],
  "evidence": { "contracts": [] },
  "satisfactionCases": [],
  "success": {
    "criteria": [
      { "id": "wantware://success/example",
        "claim": "The desired difference is established.",
        "condition": "desiredDifference == true" }
    ],
    "aggregate": { "operator": "all", "criterionRefs": ["wantware://success/example"] }
  }
}
```

This is enough structure for the first real implementation experiment. It remains
an incomplete proposal: it has no evidenced state account, complete satisfaction
argument, delivery commitment, issued Directives, or executable Imperatives.
Structural validity and source readiness are not permission to skip those steps.

---

## 19. Changelog

### 0.3 (this document)

- **Speech act process clarified without a wire-format change.** Existing strata
  map to Expressive, Assertive, Declarative, Directive design, and Imperative
  realization concerns. Dedicated delivery commitments and committer-to-Directive
  issuance/authorship links remain unrepresented; §2.1.2 records the separate
  engagement obligations and coordinated future contract amendment required.
- **Readiness is a first-class record.** `readiness[]` holds
  `ReadinessAssessment` records with `kind`, exact `subject` binding, policy,
  `internalClosure`, `externalAdequacy`, `ready`, `blocking[]`, `advisory[]`.
  Handoffs no longer carry those three fields inline; they carry `status` and a
  `readinessRef`. This lets `formalizable` be assessed on the source stratum,
  which had no handoff of its own in 0.2.
- **Ratifications are separate attestations.** `ratifications[]` records who
  attested an exact stratum binding, by what method, with what confirmations.
- **`meta.stage` replaces the scalar `RefinementLevel`.** Seven stage names;
  `meta.status` reduces to `draft | active | retired`.
- **`NOT_APPLICABLE` joins acquisition status.** Some claims require no
  observation; the axis must say so rather than borrowing `ACQUIRED`.
- **Revision requests are typed.** `RevisionRequest.kind` enumerates the five
  typed returns; `requestedDisposition`, `affectedRefs`, and `blocking` are
  recorded.
- **Evidence records name their observer.** `observerRef` and `independence`
  make the Witness rule computable.
- **Compatibility fields removed.** `intent.unresolved`,
  `provenance.unresolved`, `Capability.evidenceContractRefs`,
  `ProcedureNode.evidenceContractRefs`, and `EvidenceRequirement.sourceRef` are
  gone; nothing consumed 0.2, so the deprecation period is unnecessary.
- **Field names pinned.** `epistemicState` and `acquisitionStatus` are the
  canonical names everywhere, including in the kernel plan.

### 0.2

Introduced the four-strata manifest, exact version/hash bindings, the
formalization and cognification handoffs with internal closure and external
adequacy, satisfaction cases and warrants, the observation plan, candidate
mechanisms, cross-stratum bindings with blast radius, and revision requests.

### 0.1

Flat domain envelope: intent, ontology, state, capabilities, procedures,
constraints, policies, evidence contracts, success criteria, failures, tests,
implementation, provenance. No ownership, versions, or readiness.

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
