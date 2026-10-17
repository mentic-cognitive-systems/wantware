# Adding the Wantware Representation to the Agency

## Semantic, cognitive, and materialization contracts inside ACE³

**Status:** Proposal. Written to be executed, argued with, or refused in parts.
No Agency code has been changed by this document.\
**Reconciles:** *The Triple ACE Agency* v2.1 (`Agency/The Triple ACE Agency.md`,
`@mentic/agency` v0.1.0) with [Wantware.md](./Wantware.md) and
[WantwareIR.md](./WantwareIR.md).\
**Amends, if adopted:** *The Triple ACE Agency* §11, §15, §19, §24, §29, §34,
§39, §48, §55, §69, §70, §72.\
**Grounded against:** the kernel as it stands in `Agency/kernel/` and
`Agency/roles/`, not the spec's description of it.\
**Calibrated against:** three encodings, named in §15.

---

## 0. What This Document Is

We circled the same idea from two philosophical starting points and arrived at
two designs that do not overlap by accident. The question worth asking is not
which is right but **which half of the problem each one solved**, and what the
other half is missing because of it.

> **ACE³ is an institution without a representation.
> Wantware is a representation without an institution.**

ACE³ knows who may act, on whose authority, measured against what recorded
intent, with what provenance, under what budget, and how the work stops. It is
extraordinarily strong on governance of activity. What it governs is largely
prose: requirements are sentences, acceptance conditions are sentences,
objectives are sentences. The apparatus is rigorous; the substance it operates
on is not typed.

Wantware knows what the substance should be. It types intention, world, change,
capability, evidence, and success, and it separates meaning from mechanism and
mechanism from source. Its clarified speech act flow also expresses accountable
delivery obligations: a committer promises the required truths, then authors the
instructions for realizing them. ACE³ supplies the institutional authority,
refusal, budget, termination, human participation, and delivery enforcement
needed to govern those obligations. Expressing a promise does not establish the
authority or resources to execute it.

Neither is a superset of the other. This document is about the join. It adds one
thing the Agency does not have:

> **A representation of how far a want has moved from fluid desire toward
> running machinery, with typed semantic, cognitive, and materialization
> handoffs that refuse to let any role alter another role's truth silently.**

Everything below is downstream of one correction that changed the shape of the
design:

> *"If something can't be codified it remains somewhere on that cognitive
> continuum of dynamical freedom, but if it's in a flow it remains a bounded
> element with known and unknown knowns and unknowns in that flow."*

The first proposal was one `codifiable()` boolean. The second was boundedness
alone. Both were too coarse. Boundedness is **necessary but not sufficient**: an
early representation that names its ignorance is safe to carry, but not thereby
ready to be formalized, cognified, or codified. The model therefore separates:

```text
BOUNDEDNESS             is the artifact honest about scope and uncertainty?
MATERIALIZATION STAGE   which of the seven transformations has it reached?
READINESS               which next typed handoff may consume it, and why?
```

**What this plan deliberately does not reopen:** the authority model, the dual
gate, the Charter and refusal boundary, budgets and termination, governance
tiers, the human participation model, or the Delivery Invariant. The delivered
handoff gains IR artifacts; ACE³'s institutional responsibilities remain the
half that is already correct.

Sections 1–4 are the join. Sections 5–10 are the deltas. Sections 11–14 are the
change. Sections 15–20 are how we find out whether it was right.

---

## 1. Where They Already Agree

The failure mode of a reconciliation is re-introducing under a new name
something the system already does well.

| Wantware concept | ACE³ equivalent, already implemented |
|---|---|
| Cognitive crystallization | The Cognition Ladder (§11), Crystallization (§15), and the existing `codifier` role graph, whose correct name is **Productizer** |
| Convert intelligence into infrastructure | KISS: *the machines hum, the models sleep* (§10); the Ratchet (§14) |
| Capability routing by leverage | Build-time vs run-time cognition (§12); `engineClass`, `engineTier` in grammar 1.4 |
| Cognitive roles (executor / planner / supervisor / auditor / architect) | The nine graph-backed Role Models (§19) |
| Independent auditor over trajectories | The Authoritative Auditor (§40–45); 25 deterministic checks in `kernel/audit-lint.js` |
| Guards as compiled experience | The check registry, growable through the PROCESS proposal scope |
| Failure taxonomy driving harness repair | `FINDING_KINDS` and `WIDENING_LADDER` in `kernel/return-path.js` |
| Completion is state, not opinion | The Completion Invariant (§69) |
| Evidence before belief | The Evidence Invariant (§69): *confidence is not a control input* |
| Externalized state | Five append-only ledgers; the Scroll; `ActionGraph` state |
| Declarative constrains imperative | The Declarative/Imperative seam (§21) |
| Procedure specified for a weaker executor | Bounded Procedural Awareness (§31) |

`agenticCognition.md` is visibly the connective tissue; several ACE³ invariants
read as restatements of its executive doctrine. So the useful question is
narrow. Wantware contributes a typed semantic contract, a typed cognitive
design, a typed materialization handoff, and the readiness and evidence
disciplines that bind them. ACE³ supplies the institution in which those
artifacts are authored, ratified, challenged, executed, and returned.

### 1.1 What ACE³ gives Wantware

ACE³ supplies the institutional mechanisms for:

```text
AUTHORITY     authorship is not authorization; the dual gate
REFUSAL       a Charter, a refusal boundary, an engagement it may decline
PROPOSAL      a universal channel with a no-self-promotion terminus
PROPORTION    governance tiers; overhead scaled to stakes
TERMINATION   budgets, liveness, oscillation detection, decision deadlines
HUMANITY      the Human Role Ledger; Mortal Time and Ergonomic Meaning; a person as peer
PROVENANCE    which authorized act produced each canonical change
DELIVERY      handoff, residue scanning, clean-room verification, the Delivery Invariant
```

The precursor's `Agent = { reduce, synthesize, execute, verify, learn }` is one
actor doing five things. Adopting that literally would collapse the Separation
Invariant and hand the verifier's job to the executor, which is the failure §6
exists to fix. The five verbs are **stages**, and ACE³ already knows different
roles must own them:

```text
reduce      → Client Partner          conception → conceptualization
formalize   → Formalizer              conceptualization → semantic contract
synthesize  → Architect / Cognifier   semantic contract → mechanism design
codify      → Builder / Codifier      mechanism design → source and build inputs
integrate   → Integrator            provisional source → coherent stable candidate
verify      → Validator + Auditor     change → evidence → judgment
learn       → Productizer + Process Designer
```

> **Wantware supplies what flows between the roles. ACE³ supplies who may
> author, ratify, challenge, implement, and witness each transition.**

Integration is not a fourth authoring authority and not a synonym for
verification. It is the realization step that makes generated or incumbent code
cohere: compilation, dependency resolution, integration, contract runs, and
reproducible packaging. (Deterministic replacement proposals are
crystallization, which stays with the Productizer on the Cognition Ladder.) Its candidate
may be mechanically sound yet semantically wrong. Validator and Auditor retain
the independent judgment over whether attributed observations establish the
contract's success claims; failures return to the earliest role authorized to
repair their explanation.

---

## 2. The Authority Seam and Three Typed Handoffs

ACE³ places the Declarative/Imperative seam (§21) between the Enterprise and
Production layers. Management declares what must become true; production
decides how. That seam stays where it is.

But "declarative versus imperative" is too coarse for the representations that
cross the Agency. Before source there are two different acts:

```text
FORMALIZER   meaning → formal meaning        the Semantics of State and Change
COGNIFIER    formal meaning → mechanism      the Mechanisms of State and Change
CODIFIER     mechanism → source              the Materializations of State and Change
```

The single "representation seam" becomes **three typed handoffs** below the
authority seam:

```text
                              THE AUTHORITY SEAM
       client sovereignty · Agency authority · plan and execution gates

  Client ──► Client Partner ──► Formalizer
              conception /       authors and keeps the semantic contract
              conceptualization  without acquiring semantic sovereignty
                         │
  ═════════════════ SEMANTIC HANDOFF: SemanticContract ══════════════════
                         │
                         ▼
              Architect acting as the Agency Cognifier
              architecture · procedure · decisions · dependencies
                         │
  ═════════════════ COGNITIVE HANDOFF: MechanismDesign ══════════════════
                         │
                         ▼
              Builder acting as the Wantware Codifier
              source · tests · schema · configuration
                         │
  ═══════════ MATERIALIZATION HANDOFF: CodificationManifest ═════════════
                         │
                         ▼
              Validator · Compiler/Runtime · Deliverer
```

The Client remains sovereign over what is meant. The Formalizer authors and
keeps the formal artifact; the Client Partner obtains item-level confirmation
and ratifies the version on that recorded authority. Neither may choose
implementation. The Architect already asks the Cognifier's question, so a
separate Cognifier role would duplicate it until experience proves otherwise.
The Builder already performs codification.

### 2.0 Speech acts across the authority seam

The [development process](../../../architectures/The%20WantWare%20Development%20Process.md#31-the-speech-act-flow)
defines a sequence of obligations carried through these handoffs:

```text
Expressive Want → Assertives about evidenced current and wanted states
→ Declaratives specifying the truths needed to bridge their gap
→ accountable Commissive → that committer authors Directives
→ executable Imperatives → evidence against the original Want
```

The Client Partner preserves the expression and separates confirmed readings,
evidence, assumptions, and unknowns. The Formalizer specifies required truths
without treating a wanted state as an observed fact. Semantic ratification
confirms meaning; it does not promise delivery. An accountable Agency actor must
then explicitly commit to the exact obligations, scope, dependencies, and
delivery conditions. Role occupancy, plan authorization, readiness, and handoff
acceptance do not make that Commissive.

That committer authors the issued Directives, using the Architect/Cognifier for
attributable design work within its authority. A candidate MechanismDesign may
be explored before commitment; producing or accepting it does not issue work.
The Builder, Integrator, and runtime realize its instructions as Imperatives.
Separate Agency authority and execution gates still apply. Verification must
trace realized effects through the issued Directives to the committed
Declaratives and the original Want, rather than close on a successful build.

Determinism belongs to the process contracts: explicit inputs, obligations,
validation, and defined success, failure, retry, and re-entry branches. A
probabilistic planner or generator may propose differing outputs; only outputs
that pass the required checks may advance, and arrival still requires evidence.

These speech acts neither replace the seven factory stages nor add a fifth
stratum. They expose distinctions within and across the existing four strata.
The AXIS flow below is a placement map, not a substitute for their order.

### 2.1 Mapping onto the AXIS Cognitive Flow

```text
AXIS Cognitive Flow    ACE³ occupancy               Wantware stage
────────────────────────────────────────────────────────────────────────
Values            ──►  Agency Charter               (no analogue)
Goals             ──►  Client Goals                 Conception · Conceptualization
Plans             ──►  Executive Action Plans       (procedure of the engagement)
Declaratives      ──►  Graph node definitions       Formalization · Cognification
                       bridgeheads, ladder rungs    ontology · capability · evidence · success
═════════════════════ WANTWARE IR ══════ REPRESENTATION SEAM ═══════════
Imperatives       ──►  Engine evaluation            Codification · Compilation
Instructions      ──►  Task assignments             (executable plan)
Actions           ──►  Role Model work              Computation
Behaviors         ──►  Delivered system running     Observed reality
Change            ──►  Client outcome               Evidence → Verification
```

Today the representation seam is a rule the roles are trusted to respect.
Wantware makes it an **artifact**: one envelope that carries intent, ontology,
capability, procedure, evidence, and success across that line, and that can be
validated for readiness before anything is built.

### 2.2 Steps carry references, not copies

ActionGraph steps do not each carry their materialization state. They carry the
smallest relevant references:

```js
representation: {
  semantic:  { id: 'F-42', version: 7, hash: 'sha256:…' },
  cognitive: { id: 'C-42', version: 3, hash: 'sha256:…' },
  readiness: {
    required: 'codifiable',
    assessment: { id: 'R-42', version: 2, hash: 'sha256:…' },
  },
}
```

The referenced artifacts carry ontology, frame, epistemics, and stage. The step
declares its exact representational basis; those references do not themselves
authorize execution, establish a commitment, or prove Directive issuance. This
keeps the ActionGraph a graph of action and keeps `STEP_FIELDS` about the basis
for action.

### 2.3 The vocabulary collision

**"Codifier" currently means two different things.** In Wantware it is the role
that materializes source. ACE³'s existing role named `codifier` does not do
that and does not formalize meaning: its graph is
`scan-ledger → design-replacement → explain-the-miss → shadow-run → generalize →
check-ratchet → emit` (`roles/codifier/graph.js`). It finds stable cognitive
distributions and proposes deterministic replacements. It is a **Productizer**.

Renaming it Formalizer would preserve the collision and assign semantic authority
to a graph that never reads client meaning. The migration is:

```text
persisted id   canonical id          function
codifier       Productizer          cognition → cheaper stable mechanism   (existing role)
(new)          formalizer            meaning → formal semantic contract     (new role)
architect      Architect/Cognifier   semantic contract → mechanism          (existing role, new remit)
builder        Builder/Codifier      mechanism → source                     (existing role, named function)
```

History is not rewritten. `codifier → Productizer` is a resolution alias used
by roster, practice, provenance, collaboration, and replay. Fresh records use
`Productizer`; retained records continue to say `codifier` and remain
interpretable (§11.4).

---

## 3. The Materialization Ladder

The Agency has one ladder. It needs a second, and the two measure different
things.

```text
THE COGNITION LADDER (§11)              THE MATERIALIZATION LADDER (new)
a property of the DELIVERED SYSTEM      a property of the REPRESENTATION
"how much thinking must run?"           "how far has the want advanced?"

4  COGNITION      generative model      6  CONCEPTION        fluid want
3  NARROW MODEL   classifier            5  CONCEPTUALIZATION bounded reading
2  PROCEDURE      deterministic code    4  FORMALIZATION     semantic contract
1  TABLE/DT*      lookup/path           3  COGNIFICATION     mechanism design
0  DISSOLVED      need removed          2  CODIFICATION      source / config / tests
                                        1  COMPILATION       executable artifact
                                        0  COMPUTATION       running trajectory
*DT = Decision Tree
```

Both move toward determination. Their rules differ:

> **The Cognition Ladder says: descend as far as you can.**
> **The Materialization Ladder says: advance no faster than the next handoff
> is ready.**

A **premature materialization transition** is the failure the second ladder
names. The Agency has had no word for it, which is why it keeps arriving
disguised as diligence: a semantic model written from a document nobody
interrogated, an architecture chosen before the frame was ratified, an
acceptance claim without a warrant, a schema chosen before the entity was agreed.

### 3.1 The stages, as the Agency sees them

```text
6  CONCEPTION        fluid; very gassy. No fixed referents; contradiction permitted.
   ARTIFACT  the client's words, verbatim, unimproved

5  CONCEPTUALIZATION condensing; rough edges and outlines. Re-shapeable at low cost.
   ARTIFACT  a ConceptualizationPacket: the Client Partner's reading, marked as a
             reading and bound to its conception sources

4  FORMALIZATION     fluid but shaped; the Semantics of State and Change.
   ARTIFACT  SemanticContract, authored by the Formalizer, ratified through the
             Client Partner on recorded client confirmation

3  COGNIFICATION     crystallizing; clear shapes with properties and interfaces.
   ARTIFACT  MechanismDesign, authored by the Architect acting as Cognifier

2  CODIFICATION      true form; fixed, though still "soft" down to its hardware platform's firmware.
   ARTIFACT  source, tests, schema, configuration, and a hash-bound CodificationManifest
             produced by the Builder

1  COMPILATION       frozen.
   ARTIFACT  executable artifact bound to a runtime

0  COMPUTATION       determined; one trajectory through state.
   ARTIFACT  observed operation, not reality in full
```

### 3.2 The ladders are orthogonal

An element has a coordinate on each:

```text
                       MATERIALIZATION →
              6      5      4      3      2      1      0
         ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐
    4    │  ·   │  ·   │      │  A   │      │      │  B   │  cognition
    3    │      │      │      │      │      │      │      │  narrow model
 C  2    │  ·   │  C   │      │      │      │      │  D   │  procedure
 O  1    │      │      │      │      │      │      │      │  table/decision tree
 G  0    │  E   │      │      │      │      │      │      │  dissolved
         └──────┴──────┴──────┴──────┴──────┴──────┴──────┘

A  a model call, mechanism designed, not yet written        healthy
B  a model call running in the client's system forever      §14 liability
C  "it'll be code" — named, not designed                     honest, early
D  a deterministic procedure in production                   the goal
E  a want we talked the client out of                        best outcome
```

`B` and `D` are both fully materialized and worlds apart on cost; the Cognition
Ladder tells them apart. `A` and `C` are both early and both valid artifacts;
boundedness makes them honest, and `cognifiable` or `codifiable` readiness
determines whether they may cross the next handoff.

Crystallization moves a delivered capability **down the Cognition Ladder**. A
materialization transition moves a representation one stage toward computation.
Formalization is exactly one such transition, Conceptualization → Formalization,
and is not the generic name for all seven. The Productizer owns the former;
Formalizer, Architect/Cognifier, and Builder/Codifier own distinct transitions of
the latter.

---

## 4. Boundedness, Readiness, and Tiers

An element may sit at any stage. What it may not do is sit there opaquely.

```text
An element is BOUNDED when it states, for its own scope:

  FRAME             what domain, actors, time, and conditions its claims cover
  ESTABLISHED       what it treats as known and what observation or authority
                    warrants that treatment
  KNOWN UNKNOWNS    what it knows it does not know, enumerated
  HELD-KNOWLEDGE    which Catalog, Scroll, Agency Record, and domain sources were
                    queried, at what version, with what acquisition status
  OUT-OF-FRAME RISK assumptions at the edge and the probes by which the frame can
                    be challenged
```

You cannot enumerate unknown unknowns, and a declared frame does not make them known. 
It makes the **claim surface** explicit so another person, domain source, counterexample, user, or operational observation can attack its edges. 
The Slack failure; the expressed want of "tell me about important message" missing the important Slack message becaue it
wasn't considered as a message channel to monitor, becomes easier to find because `Message` is visibly outside or absent
from the frame, not because a graph has proven the world complete.

### 4.1 Three organs for unknown knowns, and no name for them

```text
COMPONENT CATALOG (§33)     things the Agency built and might not remember it has
                            → catalogBypass check already exists
THE SCROLL (§55)            things a runner saw and recorded as a sighting
                            → harvested at Base Camp; rarely read across engagements
THE AGENCY RECORD (§67.24)  closed facts with provenance from prior engagements
                            → exists; not queried at intake
```

All three store things the current artifact has not yet surfaced. Giving them a
shared query at intake is cheap and probably the highest-value-per-line change
in this plan. The query record keeps epistemic state separate from acquisition
status: `UNKNOWN / NOT_QUERIED` and `UNKNOWN / TOOL_FAILED` demand different
next actions even though neither establishes a fact.

### 4.2 The gates

```js
bounded(element)                 // honest enough to carry
formalizable(conceptualization)  // safe input to the Formalizer   → semantically mapped relational logic (concepts)
cognifiable(semanticContract)    // safe input to the Cognifier    → cognitively mechanized relational logic (cogs)
codifiable(mechanismDesign)      // safe input to the Builder      → codifiably materialized logic (code)
stageOf(element)                 // advisory location on the seven stages
```

Each returns a `ReadinessAssessment` (WantwareIR.md §5): `{ kind, subject,
policyRef, internalClosure, externalAdequacy, ready, blocking[], advisory[] }`,
never a bare boolean. Boundedness is a precondition for each and a substitute
for none.

These gates sit beside, not inside, `executionAllowed`:

```text
executionAllowed(step)                 authority to act        implemented (§46)
formalizable(conceptualization)        permission to formalize proposed
cognifiable(semanticContract)          permission to design    proposed
codifiable(mechanismDesign)            permission to build     proposed
```

An exploratory Lane action may work on a bounded partial artifact specifically to
make it ready. A consumer action may not run until its named readiness holds. A
Barrier adds the tier's assurance requirement on top.

### 4.3 Tiering: how not to violate KISS with an IR

A full WantwareIR envelope for "change the copy on my homepage" is exactly the
Tier-0 overkill §39 exists to prevent. Wantware's own principle, *incomplete
representations are valid artifacts*, is the answer, bound to the tier already
selected before planning begins:

```text
TIER 0  TRIVIAL        Formalization may be compact, but formalizable and
        copy change    cognifiable must still say why. Prose claims may remain
                       unwitnessed until a Barrier; their status is explicit.

TIER 1  STANDARD       The semantic contract includes the entities, transitions,
        a small site   constraints, and success claims that matter. Evidence is
                       required for Barriers and run-surface cognition.

TIER 2  CONSEQUENTIAL  Full satisfaction cases; all claims map through the
        real users,    cognitive design; binding requirements and dependencies;
        money, data    codifiable blocks plan release; stale hashes block work.

TIER 3  CRITICAL       Independent evidence wherever policy marks a claim as
        irreversible   requiring it; dual review of warrants; unresolved semantic
                       questions and stale upstream bindings block absolutely.
```

The one line to add to §39:

> **The tier selects the readiness and evidence policy each typed handoff must
> satisfy. A tier may not be lowered to escape a readiness requirement.**

Governance still costs a fraction of the work it governs, while the depth and
assurance of representation become a declared, auditable choice.

---

## 5. Delta 1 — The Ontology, and Who Owns It

### 5.1 What Wantware says

Intention must traverse a declared universe before it becomes procedure. The
ontology is a type system for agency. The canonical failure is the Slack
message: every tool call succeeded, the procedure was correct, the requirements
were met, and the user missed something important because `Message` was never
an entity. That is an ontological failure, not an imperative one.

### 5.2 What ACE³ has today

The Intent Model (§24) is a list: `REQUIREMENTS.json`, `CONSTRAINTS.md`,
`NON-GOALS.md`, `ACCEPTANCE.md`. Requirements carry provenance, confirmation,
ladder placement, and acceptance. There is no declared world they range over.

Consequently `scopeDrift` (`kernel/audit-lint.js:80`) catches drift **outward**,
a node satisfying no confirmed requirement. Nothing catches drift **inward**: the
requirement never written because nobody named the entity. That failure is
detectable only at step 22 of the engagement cycle, as a client acceptance
failure, which §28 correctly identifies as the Agency's most expensive signal.

### 5.3 Two ontologies, one alignment map

```text
AGENCY ONTOLOGY                          [A] structure · [D] contents
  Entities, verbs, relations, and capabilities the Agency has found to recur
  across engagements. Indexes the Catalog. Cross-engagement, Charter-funded.
  Grows ONLY by generalization and promotion, exactly like a component (§33).

CLIENT ONTOLOGY                          [A] that it exists · client-sovereign
  How THIS client's product or service defines and delivers itself to its users.
  Stands on its own. The IR's ontology domain for the engagement.

ONTOLOGY ALIGNMENT                       [A] relation types · [D] mappings
  A versioned map between the two:
  equivalentTo · mapsTo · narrowerThan · broaderThan · overlaps · conflictsWith · unmapped
```

The client ontology is **a model of the client's cognitive model**, not a
normalized rendering of their domain.

> The Agency does not get to correct the client's ontology. It gets to make it
> explicit, find its gaps, and ask about them.

That follows from §5 (the client is sovereign over the deliverable) and §22 (the
Client Partner defends the client against the Agency's enthusiasms). Normalizing
a client's world into the Agency's preferred shapes is the most sophisticated
form of building the wrong thing carefully, and it is invisible to every check in
`kernel/audit-lint.js`, because the plan traces perfectly to requirements that
have already lost the point.

The relationship is therefore not inheritance. Inheritance would make the
Agency's ontology a semantic parent and allow a future Agency change to alter a
client type implicitly. Alignment is explicit, versioned, and directional. It
supports Catalog lookup without asserting identity. Where true subtyping is
useful, the alignment may say so as a claim with provenance; it is never implied
by storage structure. Promotion from client ontology to Agency ontology is a
distinct, Charter-funded act with the same three refusals
`ComponentCatalog.promote()` already enforces.

### 5.4 Three role moves

```text
ADVOCACY — the Client Partner
  "The client's world contains this, and the deliverable must honour it."
  Supplies: client utterances, corrections, decisions, confirmed readings
  Owns: obtaining item-level confirmation; ratifying a semantic version only on
        the client's recorded authority
  Does not: author the formal model by quietly translating during ratification

AUTHORSHIP AND CUSTODY — the Formalizer
  "This is the precise semantic contract that preserves that confirmed meaning."
  Authors: ontology · intent · constraints · invariants · success criteria ·
           claim / warrant / evidence obligations · alignment proposals
  Owns: internal coherence, provenance, versioning, semantic change control
  Does not: choose the mechanism, acquire client sovereignty, or self-ratify

HEADROOM — the Architect acting as Cognifier
  "To deliver that, I need room, range, and resources."
  Proposes:
     ROOM       semantic distinctions the design needs but may not choose —
                for example whether Visitor and Account may merge
     RANGE      degrees of freedom a value must have — ordering precision,
                cardinality, retention window, tolerance
     RESOURCES  realization capabilities and external dependencies; any new
                required behavior returns to the semantic contract
  Answers to: realizability
  Keeps: implementation-only entities (queue, lease, cursor, epoch) in the
         cognitive contract unless they affect client-observable meaning
  Sovereign over: no semantic fact. It returns a typed request.
```

`RANGE` is the move with no vocabulary anywhere in the Agency today, and it
catches the most expensive class of quiet defect. The MonyTyme spec contains a
textbook instance:

> *"`occurred_at` is `DATETIME(6)` — at second precision, same-second events
> compare equal and the guard quietly stops working."*

That is an Architect asking for range on a value the client may never have
thought about, with the consequence of refusal stated. Today it lives in a
README. Under this plan it is `semantic-clarification-required`, attached to the
ordering success criterion and the exact SemanticContract hash. The Formalizer
authors a revised version if the client decides; the Architect does not edit the
range in place.

### 5.5 The negotiation and its termini

No author self-ratifies. That is the Proposal Invariant (§69) applied to a new
scope.

```text
NEW PROPOSAL SCOPE: SEMANTIC                                            §48

  Formalizer proposes a SemanticContract version
      terminus: Client Partner ratification, valid only with recorded client
                confirmation (§25 — explicit readback, method recorded)

  Architect/Cognifier proposes ROOM / RANGE / RESOURCE
      if purely mechanical: stays in the MechanismDesign
      if semantic: typed return to Formalizer → Client Partner → client

  Auditor runs internal closure checks, deterministic, every cycle:
      referenceClosure · stateReachability · transitionCoverage · frameDeclared

  Tier policy schedules external-adequacy probes separately:
      client readback · domain review · counterexample · representative scenario ·
      user / operational observation
```

Within a declared frame, three properties are graph traversals that cost no
tokens:

```text
REFERENCE CLOSURE    every semantic reference in a confirmed requirement resolves
                     to a declared entity, relation, state, or deliberate omission
STATE REACHABILITY   every entity state a success criterion asserts is reachable
                     by some declared verb — "Notification.delivered is asserted;
                     no verb produces it"
TRANSITION COVERAGE  every success state has a declared transition, or an
                     explicitly unresolved required behavior
```

Together they answer "is this model internally closed over the frame it
declares?" They do not answer "did we declare enough of the real world?"

New finding kinds for `kernel/return-path.js`:

```js
semantic_model_incomplete:   { addressee: 'formalizer', posture: 'clarifying',
  about: 'the semantic frame omits a referent or transition needed by a claim' },
ontology_alignment_conflict: { addressee: 'formalizer', posture: 'clarifying',
  about: 'the Agency mapping would change rather than align client meaning' },
capability_unbound:          { addressee: 'architect',  posture: 'corrective',
  about: 'the cognitive design invokes a capability with no binding or dependency' },
```

`semantic_model_incomplete` is `clarifying`, not `corrective`, deliberately. The
Formalizer owns repair of the artifact but cannot decide the missing meaning; it
returns a typed question through the Client Partner. The Architect must never
repair this finding by quietly widening its procedure.

This also upgrades the **Component Catalog**. `kernel/catalog.js` indexes by
component name and `search()` matches against the assignment objective. With
stable realization-capability identifiers traced to required behaviors, a
component declares which capability it realizes, and catalog-first composition
(§32) becomes a typed query. "The first client pays for a component; every client
after that should not" depends entirely on the second client's need being
*recognized* as the same need.

---

## 6. Delta 2 — Satisfaction, Evidence, and the Completion Invariant

**This is the highest-value import in the document. Nothing else is close.**

### 6.1 What Wantware says

```text
tool returned  ≠  operation succeeded  ≠  desired state was achieved
```

A success criterion is judged by a satisfaction case: claim, warrant, evidence
contracts, independence requirement. A claim must not be considered established
while required evidence remains `UNKNOWN`, `UNAVAILABLE`, `NOT_QUERIED`,
`AMBIGUOUS`, `TOOL_FAILED`, or `OBSERVATION_FAILED`. Procedure and success are
separate objects; the procedure may be wrong, the criteria remain the judge.

### 6.2 What ACE³ has today

The Completion Invariant (§69) states it perfectly:

> An initiative is complete because its formal acceptance conditions are
> satisfied — not because an agent declares success.

The kernel does not yet keep that promise. Two places in `kernel/runtime.js`:

**`#runDeterministic` (line 614).** After a registry function returns without
throwing:

```js
const results = (node.action.acceptance ?? []).map((a) => ({
  condition: a, passed: true,
}));
```

Every authored acceptance condition, prose written by the Executive and read by
nothing, is stamped `passed: true` because a function did not throw. This is
the exact pattern Wantware names as transport masquerading as semantic success.

**Role result reconciliation (lines 233–234).** `result.acceptanceResults`
arrives inside the Role Model's own envelope, and the kernel reconciles what it
was handed. The spec is honest that a host must re-run the external Hurdle Line
(§0.5, §50), but the kernel's default posture is that the executor certifies
itself, which the Evidence Invariant forbids in principle.

Meanwhile `acceptance` is a bare array of strings. `"Nested groups render in
correct z-order."` is not evaluable by anything. It is a note to a human.

### 6.3 The reconciliation

Acceptance conditions become **satisfaction cases**, not sentences and not flat
bags of test results:

```js
// grammar 1.5 stays backwards compatible: a string remains legal and means an
// unwitnessed claim, which the linter can report without inventing a warrant.
acceptance: [{
  satisfactionCase: 'wantware://mentic/satisfaction/nested-z-order@2',
  semantic: { id: 'F-42', version: 7, hash: 'sha256:…' },
}]

// kernel/evidence.js
SatisfactionCase('wantware://mentic/satisfaction/nested-z-order@2', {
  successCriterionRefs: ['wantware://mentic/success/nested-z-order@2'],
  warrant: { rule: 'all normative stacking examples render in their specified order', mode: 'hybrid' },
  evidenceContractRefs: ['wantware://mentic/evidence/nested-z-order@4'],
  independenceRequirement: 'policy-dependent',
  frameRefs: ['wantware://mentic/frame/normative-stacking-examples@1'],
});
```

The semantic case does not name `renderer/nested.spec`. A cognitive observation
mechanism maps its evidence requirements to a test capability; the
CodificationManifest binds that mechanism to the concrete test path. Required
evidence, acquisition design, and executable binding stay under the Formalizer,
Cognifier, and Codifier respectively.

The establishment rule (WantwareIR.md §14.2) is deterministic where the warrant
is executable and explicitly reviewable where it is not. Three audit checks fit
the existing `CHECKS` registry shape:

```text
acceptanceSelfCertified    policy or tier requires an independent witness and the
                           actor's own observation is the only supporting evidence
unwitnessedClaim           an acceptance entry names no satisfaction case
evidenceUnestablished      a claim is marked established while evidence, warrant,
                           version binding, or required independence fails
```

Self-observation is not worthless. A Builder's test output is useful diagnostic
and corroborating evidence, and at a low tier policy may permit it to establish a
low-stakes claim. It is simply not independent, and cannot be the sole basis
where the tier, claim, or policy requires another observer.
`acceptanceSelfCertified` is arithmetic over observer ids plus policy, not a
blanket rejection of everything the actor observed.

**Why this is the top import:** ACE³'s entire audit chain measures activity
against recorded intent. If completion itself is self-reported, the chain is
anchored at both ends to claims rather than observations. Everything else in this
document is an improvement. This one is a correction.

---

## 7. Delta 3 — Epistemic State, Acquisition Status, Intent Disposition

### 7.1 What ACE³ has today

A grep across `kernel/` and `roles/` finds `KNOWN`, `UNKNOWN`, `NOT_QUERIED`
only as string fallbacks in `kernel/scribe.js` for a missing author name.

What ACE³ does have is a two-valued epistemic system at the intent layer, and it
is a good one: a requirement is confirmed or it is an assumption, `method` is
retained on confirmation, and `confirmationExposure()` (`kernel/intent.js`) makes
the ratio a zero-token health signal. `TASK_STATES` in `kernel/state.js`
(`pending · ready · running · complete · failed · held · cancelled ·
superseded`) is **procedural** state. It says what the Agency is doing, not what
it knows.

### 7.2 The reconciliation

Three axes, kept apart:

```text
EPISTEMIC STATE         what is known             KNOWN · KNOWN_ABSENT · UNKNOWN · AMBIGUOUS
ACQUISITION STATUS      what happened observing   ACQUIRED · NOT_QUERIED · UNAVAILABLE ·
                                                  TOOL_FAILED · OBSERVATION_FAILED · NOT_APPLICABLE
INTENT DISPOSITION      what the client said      CONFIRMED · ASSUMED · WITHDRAWN · CONTESTED
```

plus one computed intake signal, `UNASKED`: the loaded domain question set minus
the questions actually asked. It is the deterministic form of the signal §28
currently learns only after a client acceptance failure. `CONTESTED` names the
genuinely cognitive case §23 already reserves cognition for, so the Formalizer
can preserve a conflict rather than silently choose a reading.

The field names are `epistemicState` and `acquisitionStatus`, matching the IR.
**Do not push any of these into task state.** Procedural state, epistemic state,
acquisition status, and intent disposition answer four different questions.
Merging them produces an enum no role can reason about and no audit can
interpret.

---

## 8. Delta 4 — Four Words for "Capability"

The word "capability" is already taken in ACE³. §54 `proposeCapability` and the
`unapprovedCapability` check concern capabilities the *Execution Engine* acquires
(`browser.screenshot`, `filesystem.read`). That is an authority concept. There
is no vocabulary for a capability the *delivered system* needs; `external:
['capability']` is an engine affordance.

Use four qualified terms:

```text
REQUIRED BEHAVIOR        state change or observation the delivered system must
                         support — semantic contract, Formalizer-owned

REALIZATION CAPABILITY   implementation-independent ability selected by the
                         Cognifier to satisfy that behavior — the IR's `capabilities`

IMPLEMENTATION BINDING   concrete provider, API, function, model, or component
                         selected at Codification — materialization

ENGINE CAPABILITY        what the Agency's own runtime is authorized to do —
                         §48 authority, audited by unapprovedCapability
```

The MonyTyme spec proves the payoff on its own pages. Its section *"Moving to
Bun + Neon"* says, in effect: the shape survives, the seams are in the right
places, here is the same design under different bindings. `DATETIME(6) →
timestamptz`, `ON DUPLICATE KEY UPDATE → ON CONFLICT DO UPDATE`, `php://input →
req.arrayBuffer()`. **That is a re-codification of an unchanged cognified
design, performed by hand, in prose.** The semantic requirement (verified events
are durable before acknowledgement and applied exactly once in order) was
stable. The realization capabilities (verify raw bytes, persist durably, apply
idempotently, enforce per-entity ordering) were stable. Only the bindings
changed. Wantware makes that operation mechanical.

---

## 9. Delta 5 — Failure Stage × Failure Addressee

Wantware localizes failure by **materialization stage**:
`repair = earliestStageThatExplains(failure)`. ACE³ localizes failure by
**owner**: `FINDING_KINDS` gives every finding an addressee and a posture, and
`WIDENING_LADDER` (`builder → architect → managing-executive →
process-designer`) widens the frame on recurrence. These are two coordinates
and should be crossed, not merged:

```text
                  WHO OWNS THE RETURN  (Agency role mapping)
                  builder    architect    formalizer    client-partner
   computation      ▓            ·             ·              ·
   compilation      ▓            ·             ·              ·
   codification     ▓            ▓             ·              ·
   cognification    ·            ▓             ·              ·
   formalization    ·            ·             ▓              ▓
   conceptualizn    ·            ·             ▓              ▓
   conception       ·            ·             ·              ▓
   ↑ EARLIEST STAGE THAT EXPLAINS THE FAILURE
```

Two consequences:

**The widening ladder gains a rule it lacks.** Today widening is driven by
recurrence: three engagements, three cards. That answers "is this systemic?" It
does not answer "how deep should we repair this one?" The stage rule is that
discipline, and it stops the Agency from fixing every failure at the Builder.

**Backward movement is typed.** A role returns a finding to the role with
custodianship; it does not edit an upstream stratum. The IR's
`RevisionRequest.kind` values map onto new `FINDING_KINDS`:

```text
semantic_clarification_required   Cognifier → Formalizer
  The formalized world cannot support a mechanism without choosing meaning.
mechanism_revision_required       Builder / Validator → Architect-as-Cognifier
  Meaning is intact; the proposed procedure or architecture is not workable.
binding_unavailable               Builder → Architect-as-Cognifier
  A concrete dependency cannot realize a declared capability.
semantic_change_required          any downstream role → Formalizer → Client Partner
  The only viable repair would alter intent, constraint, invariant, or success.
premature_materialization_transition
                                  Auditor → the role that advanced the artifact
  A consumer ran on an artifact whose required readiness did not hold.
```

Every return carries source and target contract ids, versions, hashes, affected
references, evidence, and requested disposition. `intent_ambiguous` still
reaches the Client Partner; the Formalizer is now the custodian who records the
ambiguity and authors the repaired version after clarification. The most
expensive failure, requirements confirmed, met, and verified while the client did
not get what they wanted, now arrives as a typed return to conception rather
than a mood.

---

## 10. Delta 6 — The Scroll as Runtime Epistemic Store

This is the one change that **weakens an existing invariant**, and it is flagged
rather than slipped in.

### 10.1 What you said, and what it costs

> *"Rolled up it's the baton that's passed around in the orchestrated relay
> race, so it's the only way racers communicate with each other. And ... the
> scroll really just being a pointer to a shared memory location that can be
> read/written to; when a runner writes to it or reads from it the coach and his
> support staff can read/write to/from it as well, to communicate with the
> runner in real-time."*

The Scroll Invariant (§69, v2.1) says the opposite: inter-task operational memory
is committed exclusively by the deterministic Scribe on terminal exits. Runner
proposes, Scribe commits, nothing is written mid-run (`kernel/scribe.js`,
`kernel/runtime.js:216–226`). That was a deliberate defence.

### 10.2 Two regions, one baton

```text
┌─ THE SCROLL ─────────────────────────────────────────────────────────────┐
│  SEALED REGION                              UNCHANGED                    │
│    append-only · Scribe-only · terminal-path only · deduped · capped     │
│    hazards · shortcuts · course-notes · debt · sightings                 │
│                                                                          │
│  LIVE REGION — the open baton                                    NEW     │
│    a bounded shared cell for the IN-FLIGHT task                          │
│    readable and writable by the runner AND the Executive DURING the run  │
│    not durable · reconciled into the sealed region by the Scribe on exit │
│                                                                          │
│    every cell: { key, value, epistemicState, acquisitionStatus, writer,  │
│                  t, semanticRef?, cognitiveRef?, sourceRef? }            │
└──────────────────────────────────────────────────────────────────────────┘
```

The live region is where observations land as they are made, carrying their
epistemic state, acquisition status, and contract bindings. It is the runtime
epistemic store, built where it belongs: the only channel between runners.

### 10.3 Five disciplines

```text
1  DATA ONLY          the same isPlainData() check the control DSL uses (§53)
2  BOUNDED            hard cap on cells and bytes; overflow escalates like SCROLL_OVERFLOW
3  WRITER-ATTRIBUTED  every cell records its writer; this is what makes
                      acceptanceSelfCertified computable
4  NON-AUTHORITATIVE  the live region carries OBSERVATIONS and STEERING, never
                      AUTHORITY; a runner cannot read a capability grant off the baton
5  RECONCILED         the Scribe decides what graduates to sealed, with the same
                      validate / dedupe / cap it runs today; promotion preserves the
                      exact semantic and cognitive hashes under which it was observed
```

### 10.4 What it buys, and what it costs

The Executive's steering verbs (§38) act between heartbeats, at node boundaries.
`pause`, `reprioritize`, `requestIntentClarification` cannot reach a runner
mid-stride. With the live region they can, through a bounded data cell rather
than a new channel with new failure modes.

```text
SCROLL INVARIANT (amended)

  DURABLE inter-task operational memory is bounded, curated, and committed
  exclusively by the deterministic Scribe on terminal exits.

  A bounded, non-durable LIVE REGION carries in-flight observations and
  steering between a runner and the Execution Engine. It is data-only,
  writer-attributed, non-authoritative, and reconciled by the Scribe on
  every terminal path.

  At Tier 3, every live-region write is provenance-recorded.
```

That last line is the price and it should be paid.

---

## 11. Roles and Typed Handoffs

### 11.1 The role map

```text
CLIENT                    semantically sovereign
  decides what is wanted and whether a formal reading preserves it

CLIENT PARTNER            conception / conceptualization / ratification
  records the client's words and its own reading; obtains item-level
  confirmation; ratifies a SemanticContract only on that authority

FORMALIZER                NEW Production Role Model; semantic custodian and author
  ontology · intent · constraints · invariants · definitions · success criteria ·
  satisfaction cases · evidence obligations · unresolved questions
  NEVER chooses implementation, silently resolves ambiguity, or self-ratifies

ARCHITECT / COGNIFIER     existing Architect performing the Wantware function
  architecture · procedure · plan shape · decisions · dependencies ·
  information flow · failure modes · observation plan
  NEVER changes semantic meaning; returns a typed semantic question instead

BUILDER / CODIFIER        existing Builder performing the Wantware function
  bindings · source · tests · schema · configuration · build inputs
  NEVER invents design or requirements; returns to the Cognifier or Formalizer

INTEGRATOR                new production role between Builder and Validator
  connects the Builder's materialization in an integration lane, corrects
  locally determined wiring defects, returns realization evidence. Never
  self-certifies semantic success, changes a mechanism, or masks an upstream
  contradiction.

Productizer              existing Agency role persisted as `codifier`
  finds stable cognitive distributions, designs deterministic replacements,
  shadow-tests them, then proposes promotion. Never self-certifies semantic
  success or promotes its own work. Graph unchanged.
```

No separate `cognifier` role is introduced in v0.1. The Architect already owns
the design authority and produces the right artifact. A split becomes justified
only if the encodings reveal a stable cognitive product that is not
architecture, an authority conflict, or a graph that cannot stay bounded (Q-A).

### 11.2 The strata and their attestations

The Agency's artifacts are the IR's projections (WantwareIR.md §2.1), each
independently versioned and content-hashed:

```js
SemanticContract = {
  id, version, hash, conceptionRefs, conceptualizationRef, frame,
  ontologyRef, ontologyAlignmentRef, intentions, constraints, invariants,
  satisfactionCaseRefs, unresolved,
};

SemanticRatification = {                         // IR: ratifications[]
  id, version, hash,
  semantic: { id, version, hash },
  by: 'client-partner', clientConfirmationRefs, method, at,
};

MechanismDesign = {
  id, version, hash,
  semanticParent: { id, version, hash },
  architecture, procedure, decisions, dependencies, informationFlows,
  capabilities, bindingRequirements, realizationStrategies,
  failureModes, observationPlan, unresolved,
};

CodificationManifest = {
  id, version, hash,
  cognitiveParent: { id, version, hash },
  bindings, sourceRefs, testRefs, schemaRefs, configurationRefs, buildInputRefs,
  observationRefs, compiledArtifactRefs,
};

ReadinessAssessment = {                          // IR: readiness[]
  id, version, hash, kind: 'formalizable' | 'cognifiable' | 'codifiable',
  input: { id, version, hash }, policy: { id, version, hash },
  ready, blocking, advisory, evaluatedAt,
};
```

Every `hash` covers canonical serialized content and parent references.
Ratification is a separate attestation over the exact semantic hash. A new
upstream version never edits a child in place; it marks reverse-referenced
children `STALE`, computes the blast radius, and requires reissue or an explicit
finding that the change is non-impacting.

### 11.2.1 Delivery commitments and Directive issuance are a contract gap

The projections above remain projections of IR 0.3. As WantwareIR.md §2.1.2
records, that envelope has no dedicated commitment-to-contract binding or
Directive issuance/authorship records. `ownerRef`, decision authors, provenance,
ratifications, readiness, and handoff acceptance cannot stand in for them.
Neither the current schema nor the current runtime enforces the complete flow.

For an engagement using 0.3 today, retain **separate engagement records**:

- A delivery commitment identifies the accountable actor and binds the exact
  SemanticContract `{id, version, hash}`, its specific obligation/satisfaction
  case references, the original conception references, scope, dependencies,
  delivery conditions, and the explicit act of commitment.
- An issued Directive identifies that same actor as author, any attributable
  Cognifier assistance, issuance time and status, and the exact commitment and
  MechanismDesign `{id, version, hash}` references. Work assignments and
  completion criteria cite the relevant procedure/graph nodes. Acceptance of a
  design or an unsigned draft is insufficient.
- Execution and outcome records bind the Directive revision, exact
  CodificationManifest/build identities, executed graph nodes, observations,
  warrants, and satisfaction cases, preserving a route back to the Want.

These are process requirements for engagement review, not undocumented new IR
fields. Missing or stale commitment/issuance links leave delivery readiness
unproven even if `cognifiable()` or `codifiable()` passes. Hold issuance or the
affected execution until a reviewer establishes the complete current trace;
feasibility exploration may remain explicitly provisional. Failure branches
record unmet obligations, retry/revise/escalate under defined policy, and never
mark the Want fulfilled merely because a probabilistic component returned output.

A semantic amendment must review the commitment's scope and conditions and
require explicit recommitment where changed; it cannot silently inherit the old
promise. Reissued cognitive designs require reviewed, reissued Directives;
materialization changes require renewed execution bindings and affected
evidence. Preserve superseded records for replay, compute the downstream stale
set, and prohibit silent rebinding or fulfillment claims from stale evidence.
Non-impacting clearance needs recorded authority and rationale, not the child
author's unilateral assertion.

Machine enforcement requires a **coordinated, versioned contract amendment** to
the specification, schema, producers, validators, Agency engagement records,
and issuance/execution gates. That amendment must define these exact bindings,
authorship, revision, invalidation, and missing-trace checks together. This plan
does not add those fields to the unchanged 0.3 schema or claim they exist today.

### 11.3 Typed backward returns

```js
RepresentationReturn = {                         // IR: changeControl.revisionRequests[]
  kind: 'SEMANTIC_CLARIFICATION_REQUIRED' | 'MECHANISM_REVISION_REQUIRED' |
        'BINDING_UNAVAILABLE' | 'SEMANTIC_CHANGE_REQUIRED',
  from: { contract: { id, version, hash }, refs: [] },
  to:   { stratum: 'semantic' | 'cognitive', refs: [] },
  evidenceRefs: [],
  blocking: true,
  requestedDisposition: 'clarify' | 'revise' | 'rebind' | 'change',
};
```

The Formalizer may return conceptual ambiguity through the Client Partner. The
Cognifier may return semantic insufficiency to the Formalizer. The Builder may
return mechanism or binding failure to the Cognifier. Any role may report that a
semantic change is necessary; only the semantic path can author and ratify it.

### 11.4 Rename blast radius, and the Replay Invariant

> **Persisted records carry `codifier`.** Practice records are keyed by role id
> (`kernel/practice.js`). Event log entries, provenance rows, and collaboration
> edges carry role ids. The Replay Invariant (§69) requires retained structures
> to remain interpretable.

So: **alias, never rewrite.**

```text
NEW  kernel/role-aliases.js
       { codifier: 'Productizer' }        historical id → current id
     consulted by rosterEntry(), PracticeRecord, reflect(), collaboration edges
     History is never rewritten. A record that says `codifier` continues to
     say `codifier` and continues to resolve.
```

Files to change:

```text
roles/codifier/          → roles/Productizer/
  graph.js                 codifierGraph → ProductizerGraph
                           CODIFIER_MANIFEST / _REMIT / _INTERFACES → Productizer_*
  ROLE.md · prompts/ · tools/find-crystallization-candidates.js · test/
roles/formalizer/          NEW role package and graph; no historical alias
roles/roster.js            import + ROSTER entry
constitution/AUTHORITY.json role key
kernel/return-path.js      duplication.addressee
kernel/engines.js          targetRoles
kernel/practice.js         comment
guide/tour-guide.js/json   roles.codifier, constitution.roles.codifier, targetPath refs
test/conformance/          role-packages.test.mjs · collaboration.test.mjs
roles/validator/           test reference
docs/ · ACE³.html · The Triple ACE Agency.md
```

At this revision 25 files mention `codifier`, 13 of them code or configuration.
Regenerate the inventory immediately before implementation. The architectural
fact is the persisted id, not the count.

---

## 12. New and Amended Invariants

Stated in the form §69 uses, ready to be pasted in.

```text
### Boundedness Invariant
Every representation declares its frame, provenance, established claims and
warrants, known unknowns, held-knowledge queries, and out-of-frame risks. An
unbounded representation may not cross a typed handoff. Boundedness is
necessary and does not itself establish readiness.

### Materialization Invariant
Every representational artifact declares one of seven materialization stages.
An action that consumes it names the readiness required for that action. An
exploratory Lane may advance a bounded partial artifact; no consumer or Barrier
may bypass readiness, tier assurance, or staleness checks.

### Materialization Transition Invariant
Every materialization transition is a recorded transformation between typed,
versioned artifacts. A role may return a defect to another stratum but may not
silently mutate that stratum. Formalization names only the semantic transition;
Crystallization names only descent on the Cognition Ladder.

### Frame Invariant
An ontology declares its boundary. Internal closure establishes consistency
relative to that frame, never external completeness or adequacy. External probes
remain required by tier and policy.

### Semantic Sovereignty Invariant
The client is sovereign over intended meaning. The Formalizer authors and keeps
the semantic contract; the Client Partner obtains confirmation and ratifies a
version only on recorded client authority. Neither the Cognifier nor the Codifier
may change semantic meaning.

### Ontology Alignment Invariant
The client and Agency ontologies are separate versioned objects related by an
explicit alignment map, not implicit inheritance. The Agency may find gaps and
propose mappings; it may not normalize the client's world. Promotion into the
Agency ontology requires generalization and is Charter-funded.

### Contract Binding Invariant
Every cognitive contract binds the exact id, version, and hash of its semantic
parent. Every codification manifest binds its cognitive parent likewise. An
upstream change marks affected dependants stale, computes their blast radius,
and blocks their use until reissued or explicitly cleared.

### Epistemic Axes Invariant
Epistemic state and acquisition status are stored separately. A tool failure is
not a truth value; established absence is not an acquisition state.

### Delivery Trace Invariant (proposed; requires §11.2.1)
Before work is issued, an accountable actor explicitly commits to exact semantic
obligations and then authors the Directives. Execution binds those issued
Directives; fulfillment evidence traces their effects to the committed truths
and original Want. Ratification, authorization, readiness, and handoff acceptance
are separate acts. Missing or stale trace links hold affected delivery work;
IR 0.3 validity alone cannot discharge this invariant.

### Satisfaction Invariant
Success is argued as claim, warrant, and evidence. Passing transport or acquiring
an observation does not by itself establish the semantic claim. Completion also
requires the current delivery trace: operations fulfilled the issued Directives,
the Directives delivered the committed truths, and the realized state satisfies
the original Want. Otherwise record the unmet obligation and return to its owner.

### Witness Invariant
Every observation identifies its observer. Self-observation may be diagnostic or
corroborating evidence, but where tier, policy, or the satisfaction case requires
independence, an actor's observation cannot be the sole evidence establishing
its own claim.

### Scroll Invariant (amended — see §10.4)
```

The Witness Invariant closes the hole at `kernel/runtime.js:614`. It strengthens
the Evidence Invariant rather than replacing it: that one says confidence is not
a control input; this one says independence must be explicit and enforceable.

---

## 13. Architectural / Design Register

Applying §0.3's sufficiency test so §70 can absorb it.

```text
ARCHITECTURAL — must be right at inception            WHY IT CANNOT BE RETROFITTED

seven distinct materialization stages, with            collapsing semantics, mechanism,
  Formalization before Cognification                    and source loses who changed which truth
the Formalizer distinct from the Productizer          semantic authorship cannot be recovered
                                                        from a role that never performed it
three typed handoffs, version/hash bound, with         an unbound child cannot later prove
  reverse references                                    which parent it interpreted
boundedness declared, not inferred                     an assumption recorded later is a rationalization
epistemic state separate from acquisition status       collapsing NOT_QUERIED into truth or
                                                        "failed" is lossy
observations carry a writer                            independence cannot be established after the fact
a frame is declared                                    a boundary claimed later is drawn around
                                                        what happened
client and Agency ontologies separate, joined by       inheritance or merger silently rewrites
  explicit alignment                                    client meaning
satisfaction separates claim, warrant, evidence        a test result cannot reconstruct the
                                                        inference it was meant to justify
ActionGraph steps bind IR refs, not copies             duplicated semantic state drifts without
                                                        one authoritative version
role ids aliased, never rewritten                      the Replay Invariant
the live Scroll region writer-attributed and           unattributed history is not evidence
  non-authoritative

DESIGN — the Agency may discover and improve

which readiness and assurance a tier requires before each handoff and Barrier
the contents of the Agency ontology; of any client ontology; the alignment entries
which closure checks exist, and their severities
which external-adequacy probes each tier requires
the shape and executability of warrants and evidence contracts
the cap on the live Scroll region
the Formalizer's bounded role-graph procedure
whether evidence eventually justifies a separate Cognifier role
the expression language                                ← §15 derives it, deliberately
```

---

## 14. Staged Implementation

Dependency-ordered and code-ready, but still a proposal. Capture the test and
demo baselines immediately before implementation; counts recorded here describe
the repository when it was reviewed.

### Stage 0 — Correct the role name without breaking replay  `[A]`

```text
NEW    kernel/role-aliases.js        { codifier: 'Productizer' }
MOVE   roles/codifier/ → roles/Productizer/
EDIT   roster · AUTHORITY.json · return-path · engines · practice · tour-guide
EDIT   tests, docs, ACE³.html, The Triple ACE Agency.md
CHECK  the captured test suite and deterministic demo baseline still pass;
       stores containing `codifier` records still replay and reflect
```

**Done when** a fresh reflection resolves a historical `codifier` practice
record to the `Productizer` role without rewriting the record, and fresh
records use `Productizer`. This stage does not create the Formalizer by renaming
something else.

### Stage 1 — Satisfaction, evidence, and split epistemics  `[A]`

The correction, not an improvement. Closes the Completion Invariant.

```text
NEW    kernel/evidence.js
         EPISTEMIC_STATE = KNOWN · KNOWN_ABSENT · UNKNOWN · AMBIGUOUS
         ACQUISITION_STATUS = ACQUIRED · NOT_QUERIED · UNAVAILABLE · TOOL_FAILED ·
                              OBSERVATION_FAILED · NOT_APPLICABLE
         SatisfactionCase(id, { successCriterionRefs, warrant, evidenceContractRefs,
                                independenceRequirement, frameRefs, defeaterRefs })
         establishes(case, observations, policy)
           → { established, epistemicState, acquisitionStatus, missing, warrantStatus,
               independenceStatus, bindingStatus }
EDIT   kernel/dsl/grammar-1.4.js → grammar-1.5.js
         acceptance entries may reference a SatisfactionCase; strings remain legal
         and read as unwitnessed claims. Retain 1.4's interpreter untouched (§59).
EDIT   kernel/runtime.js:614
         stop stamping passed:true; a non-throwing deterministic node establishes
         TRANSPORT success and nothing else
EDIT   kernel/runtime.js:233
         record observer identity alongside every acceptance result
EDIT   kernel/audit-lint.js
         + acceptanceSelfCertified · unwitnessedClaim · evidenceUnestablished
DOC    §69 Witness, Satisfaction, and Epistemic Axes invariants
```

**Expect the linter to light up on existing plans.** That is the finding, not a
regression, and the count is the baseline the ratchet works against.

**Done when** the same actor observation is accepted as diagnostic evidence but
cannot solely establish a policy-independent claim, and `NOT_QUERIED` and
`TOOL_FAILED` produce the same epistemic state with different acquisition
statuses.

### Stage 2 — Versioned strata, readiness, and dependency indexing  `[A]`

```text
NEW    kernel/wantware-ir.js
         SemanticContract · SemanticRatification · MechanismDesign ·
         CodificationManifest · ReadinessAssessment
         canonical serialization · immutable id/version/hash · parent binding ·
         typed reference validation against WantwareIR.schema.json
NEW    kernel/readiness.js
         bounded · formalizable · cognifiable · codifiable
         → { ready, evaluatedAgainst, blocking[], advisory[] }
NEW    kernel/representation-index.js
         reverse refs · markStale() · blastRadius()
EDIT   kernel/dsl/grammar-1.5.js
         ActionGraph step gains optional `representation`: semantic/cognitive refs
         + readiness requirement/assessment ref. Do NOT copy materialization,
         frame, or epistemics onto every step.
EDIT   kernel/audit-lint.js
         + parentHashMismatch · staleRepresentation · readinessNotMet
```

Alongside these 0.3 projections, design and version the commitment/Directive
amendment in §11.2.1 across spec, schema, producers, validators, and Agency
engagement records. Until it lands, the encoding uses separate reviewed records;
do not insert unrecognized fields into 0.3 or infer a promise from ratification.

**Done when** changing one semantic node produces an exact reverse-reference
blast radius, holds only affected work, and leaves historical children
replayable against their old parent hash.

### Stage 3 — Add the Formalizer and the semantic contract  `[A/D]`

```text
NEW    roles/formalizer/
         graph: receive-conceptualization → surface-held-knowledge →
                model-semantics → author-satisfaction-cases →
                check-internal-closure → request-ratification → emit
         remit: semantic authorship and custody; no mechanism; no self-ratification
NEW    kernel/ontology.js
         ClientOntology · AgencyOntology · OntologyAlignment
         alignment relations · reference closure · state reachability · frame
EDIT   kernel/intent.js
         intent disposition = CONFIRMED · ASSUMED · WITHDRAWN · CONTESTED
         semantic refs; unasked() query before formalization
EDIT   roles/client-partner/graph.js
         confirm-and-ratify the exact semantic version from client-confirmation refs
EDIT   kernel/proposals.js     + SEMANTIC scope and confirmation terminus
EDIT   kernel/return-path.js   + semantic_model_incomplete · ontology_alignment_conflict
EDIT   kernel/audit-lint.js    + referenceClosure · stateReachability ·
                                 transitionCoverage · frameDeclared
```

**Done when** the Formalizer can author a bounded but not-cognifiable semantic
contract, the Client Partner can ratify only with explicit client confirmation,
and closure can pass while an external-adequacy probe still reports an omitted
real-world concern. That last test prevents closure from becoming completeness.

### Stage 4 — Map Cognifier and Codifier onto existing roles  `[A/D]`

```text
EDIT   roles/architect/graph.js
         consume a cognifiable semantic ref; headroom returns are typed;
         emit MechanismDesign with the exact semantic parent hash
EDIT   roles/builder/graph.js
         consume a codifiable cognitive ref; emit CodificationManifest with the
         exact cognitive parent hash
EDIT   kernel/return-path.js
         + semantic_clarification_required · mechanism_revision_required ·
           binding_unavailable · semantic_change_required ·
           premature_materialization_transition
EDIT   kernel/runtime.js
         enforce current refs/readiness beside authority at plan release and
         dispatch; stale steps HOLD rather than silently rebind
EDIT   constitution/TIERS.json
         tier → readiness, warrant review, evidence independence, external probes
```

Add the engagement-level issuance and dispatch checks from §11.2.1: explicit
current commitment before its actor issues Directives, attributable authorship,
exact design/manifest bindings, and HOLD for missing or stale trace links. Test
that authorization, ratification, readiness, and handoff acceptance alone cannot
release delivery work. These are proposed additions, not existing runtime checks.

**Done when** the Cognifier cannot issue `C@n` against an unratified or stale
`F@n`; the Builder cannot run on a non-codifiable `C@n`; and a
Builder-discovered semantic problem returns through the Formalizer and Client
Partner without any downstream role editing `F@n`.

### Stage 5 — The live Scroll as version-bound epistemic store  `[A]`

```text
EDIT   kernel/scribe.js       sealed region unchanged; add reconcile-from-live
NEW    kernel/scroll-live.js  bounded cell map, isPlainData-checked, writer-attributed,
                              capped, non-authoritative; epistemicState/acquisitionStatus
                              and representation refs on every cell
EDIT   kernel/runtime.js      expose to dispatch; reconcile every terminal path
EDIT   kernel/audit-lint.js   + liveRegionAuthority · observationParentStale
DOC    §55, §69 Scroll Invariant amendment
```

**Done when** an Executive `steer()` reaches a running Role Model through the
baton, the Scribe alone promotes a cell, and the promoted observation retains
the semantic and cognitive hashes under which it was made.

### Stage 6 — Capability leverage, Productizer oracle, and delivery  `[D]`

```text
EDIT   kernel/catalog.js          index by realization capability plus ontology
                                  alignment; search stays non-semantic unless the
                                  alignment is explicit
EDIT   roles/Productizer/graph.js
                                  shadow-run against applicable satisfaction cases,
                                  not only incumbent-model agreement
EDIT   roles/deliverer/graph.js   emit the IR envelope, immutable contract versions,
                                  hashes, satisfaction cases, stale/open status
```

The client receives the semantic specification their system was generated from,
not only the system. They can re-bind it, PHP to TypeScript to Bun, without
re-eliciting intent. Given the Delivery Invariant already requires the
deliverable to run with no Agency scaffolding present, this is the one piece of
the Agency's own work that *should* leave with them. A PHP/MySQL → Bun/Neon
rebind must preserve the semantic hash when meaning is unchanged and produce a
new cognitive/materialization version. A changed success criterion must produce
a new semantic hash and stale the old descendants.

---

## 15. The Calibration Program

The expression language must be **derived from encodings, not designed
abstractly**. Three targets, deliberately unlike each other, each expected to
break the representation somewhere different.

### 15.1 Encoding I — MonyTyme · middle tier · service API

`MonyTyme/monytyme/backend/Entitlement & Engagement API - PHP MySQL implementation.md`

External world, third-party events, money, irreversible effects, and an explicit
re-binding section. Worked through in §16.

```text
EXPECTED TO DEMAND
  temporal expressions            ordering, precision, windows
  exactly-once predicates         "a redelivered event produces no second side effect"
  evidence over an external DB    handler observations may contribute but cannot alone
                                  meet an independent-observer requirement
  blocking unresolved questions   VID→UID linkage; retention window; price points
  frame and external challenge    the conception "learn what converts" asks a question
                                  the declared world cannot answer

EXPECTED TO BREAK
  nothing structural. This is the target the model was designed against, which is
  exactly why it must not be the only one.
```

### 15.2 Encoding II — Trindex associative memory · lower tier · technical

`Core/trindex/trindexarray.js`, tuned through `Core/trindex/trindexKB.html`

The want: the associative graph should generate contextually relevant statement
serialization. No external world, no irreversible effects, no third party. The
client is you.

```text
EXPECTED TO DEMAND
  graded success criteria         "relevant" is not passed:true; distributions,
                                  thresholds, comparison against a baseline
  an existing informal ontology   formalized, not normalized: SCOPE / STATEMENT / TEXT,
                                  charge, seed, bundle, locus — already doctrine,
                                  never written as an ontology
  internal-entity confirmation    §25 requires a client utterance; who confirms a
                                  requirement about charge propagation?

EXPECTED TO BREAK
  THE EVIDENCE CONTRACT. Wantware's contracts are binary. A relevance improvement
  is a distribution shift. Either contracts gain a graded form, or graded criteria
  are a separate kind, and finding out which is the point of running this second.
```

This is the target chosen to hurt. If the model survives it unchanged, the model
is probably underspecified rather than robust.

### 15.3 Encoding III — MENTIC workspace · top tier · user-facing

`taskimatic/taskimatic_web/public/mentic.html` — *MENTIC, Integrated Knowledge
Workspace*

```text
EXPECTED TO DEMAND
  intent about experience         not function: "it should feel like one place"
  ergonomic success criteria      the Agency already has vocabulary: the Ergonomic
                                  Meaning and Mortal Time invariants, the five human
                                  archetypes, the Human Role Ledger
  a THIRD ontology                the client's model of their product AND the product's
                                  model of its user; the client and the user are
                                  different people; their relation is alignment

EXPECTED TO BREAK
  THE INTENT MODEL. §25's provenance shape assumes a requirement traces to an
  utterance. An experience requirement traces to a judgment about someone who was
  never in the room.
```

### 15.4 The output

Each encoding produces a stratal bundle and one report:

```text
ARTIFACTS a SemanticContract, a MechanismDesign if cognifiable, a
          CodificationManifest if codifiable — each at the stage it honestly
          reaches, each bound to exact parent versions and hashes
REPORT    readiness results; typed returns; stale/blast-radius results; what the
          representation could not say; which external-adequacy probes found
          something internal closure did not
```

Three reports converge into the v0.1 expression grammar. Not before. The
temptation to design the language after Encoding I will be strong and should be
refused; Encoding I is the case that fits.

---

## 16. Worked Example: The MonyTyme Engagement

The document is 284 lines and genuinely good, which makes it a better test than
a bad spec would be.

### 16.1 What it actually is

Material from all seven stages in one file, with no typed boundaries or
parent-version bindings between them:

```text
CONCEPTION        "we want to know if a paying user has encountered issues and if
                   we collect feedback from a non-paying user and make a feature
                   that actually converts them"
CONCEPTUALIZATION three services; free tier at 2 cards / 10 cash flows / 10 costs /
                   2 plans / 3 accounts / $100K assets / 2 forecasts; two paid
                   tiers at prices marked "perhaps"
FORMALIZATION     VID, UID, Entitlement, EngagementEvent, Notification; invariants
                   around durability, idempotency, ordering; implicit success
                   claims, no explicit warrants
COGNIFICATION     read raw body → verify → persist → 200; worker claims with
                   FOR UPDATE SKIP LOCKED; ordering and replay procedures
CODIFICATION      PHP + MySQL source, schema, configuration, tests; TypeScript +
                   Neon + Workers and Bun + Neon as rebindings
COMPILATION       executable PHP/service and database artifacts implied, not
                   separately identified or hash-bound
COMPUTATION       57 checks observed; database integration NOT_QUERIED —
                   "This one I could not execute"
```

### 16.2 What goes wrong today

The Client Partner graph runs `screen-charter → classify-domain →
assess-machinery → profile-fit → imply-tier` (all deterministic, all correct)
and then `understand`, whose thinking opens with the right instinct: notice
whether they described a problem or a solution. The instinct is right and
nothing downstream enforces it. Four failures follow:

1. **Provenance degrades to a document quote.** `IntentModel.record()` requires
   `source.quote`. A markdown file is not a client utterance. Every requirement
   traces to a prior design decision, and the Agency governs faithfully against
   a solution rather than a want.
2. **The conception is not recorded.** "Make a feature that actually converts
   them" produces no requirement, so no node, so `scopeDrift` never mentions it.
3. **The unresolved questions are invisible.** "OAuth account link?", "perhaps
   $49–79", "once you have a retention policy", "I could not execute
   integration.php". Nothing in the kernel represents an open question as a
   thing that blocks.
4. **The conception cannot be satisfied by the stated ontology, and nothing
   notices.** "Find what converts a non-paying user" requires joining a
   feature-usage event on a VID to a later purchase on a UID. The VID→UID link
   is the open question. The declared world cannot answer the question the
   conception asks, and every derived requirement can still be met perfectly.

That is the Slack failure, in your own spec, on the highest-value requirement in
it.

### 16.3 What changes with the Wantware layer

```text
conception
  · get paid reliably and never lose a billing event
  · let the app know what this person has unlocked, right now
  · learn what turns a non-paying user into a paying one
                                            ↑ THIS ONE HAS NO PROCEDURE YET

formalization  F-MONY@3#sha256:…                     [NOT COGNIFIABLE]
ontology
  entities   Visitor(vid) · Account(uid) · Entitlement · Feature · Plan
             Notification · WebhookEvent · EngagementEvent · Subscription
  relations  Visitor ──identifiedAs──▶ Account        [UNRESOLVED: method]
  verbs      verify · persist · apply · resolve · record
             [UNRESOLVED: no `attribute` transition is declared]

success criteria (separate from procedure; survives the Bun rebinding)
  S1  no verified notification is acknowledged before it is durable
  S2  a redelivered event produces no second side effect
  S3  an event older than the applied state for its entity produces none
  S4  entitlement reflects subscription state within N seconds of the event
  S5  for any converted account, the feature-usage history preceding
      conversion is retrievable                  ← UNSATISFIABLE AS SPECIFIED

satisfaction cases
  SC1 → S1 claim + ordering warrant + DB and response observations
  SC2 → S2 duplicate-delivery claim + idempotency warrant
           epistemicState: UNKNOWN · acquisitionStatus: NOT_QUERIED [integration.php]
  SC3 → S3 stale-event claim + ordering warrant
           epistemicState: UNKNOWN · acquisitionStatus: NOT_QUERIED [integration.php]

openQuestions (blocking)
  Q1  By what method does a Visitor become an Account?     blocks S5
  Q2  What are the actual entitlement counts and prices?   the free-tier table/decision tree is the model
  Q3  What is the retention window, given 90 days is the idempotency floor?

cognification  C-MONY@draft-2 → F-MONY@3#sha256:…    [PARTIAL; NOT RELEASABLE]
  realization capabilities   verifyNotificationSignature · persistNotificationDurably ·
                             applyEventExactlyOnce · resolveEntitlement ·
                             recordEngagement · attributeConversion [UNRESOLVED]
  binding requirements       durable transaction · raw-body signature verification ·
                             per-entity ordering; concrete bindings remain Codification
  blocking return            semantic-clarification-required (Q1, Q2, Q3)
```

Run the gates:

- `formalizable()` **passes**: the ambiguity is explicit enough for the
  Formalizer to preserve rather than invent.
- `cognifiable()` **fails**, naming Q1–Q3 against the exact semantic version.
  The candidate design may be inspected but not released.
- `codifiable()` **cannot pass**: no current design maps `attributeConversion`
  to a realizable procedure.
- `semanticModelIncomplete` **fires**: conception 3 asserts a state no declared
  transition produces.
- `evidenceUnestablished` **fires** on SC2 and SC3: the author said plainly the
  integration tests were never run. Under a satisfaction case the epistemic state
  stays `UNKNOWN` and acquisition is `NOT_QUERIED`; the two facts no longer
  masquerade as one enum.
- The **Tier-2 gate** refuses plan release until Q1–Q3 are answered and every
  required evidence acquisition has an executable plan.

S1–S5 are Declaratives grounded in the original Expressives and Assertives;
SC2/SC3 correctly retain uncertainty. After Q1–Q3 are resolved and the exact
semantic version is ratified, an accountable Agency delivery actor must
explicitly commit to the agreed obligations and conditions. This example has
not yet supplied that Commissive, so the partial `C-MONY` is a candidate design,
not an issued Directive. The committer then authors instructions through the
Architect: verify, persist before acknowledgement, apply idempotently in order,
resolve entitlements, and record/attribute conversion using the agreed method.
The Builder's concrete handlers and integration operations are Imperatives.
Separate engagement records bind that commitment, issued design, and executable
manifest by version/hash. Missing commitment or issuance evidence holds delivery
work even after the representational gates pass. Closure requires observations
supporting all agreed criteria and the original wants; unresolved attribution
or unrun tests remain unmet obligations, not successful delivery.

The engagement cannot proceed to build without a conversation about three
specific semantic things, and the conversation is generated from the structure,
not from an agent's disposition to ask.

### 16.4 The typed revision loop

```text
  you speak
      ▼
  CONCEPTION recorded verbatim, as its own artifact
      ▼
  CONCEPTUALIZATION        Client Partner's reading; confirmed items marked
      ▼
  formalizable() ── FAILS ─────▶ conceptual-clarification-required
      ▼
  FORMALIZATION            Formalizer authors F@n#hash; Client Partner ratifies
      ▼                    only from recorded client confirmation
  cognifiable() ─── FAILS ─────▶ semantic-clarification-required
      │                              "By what method does a Visitor become
      │                               an Account? This blocks S5."
      │◀──────── Formalizer issues F@(n+1); blast radius computed ───┘
      ▼
  COGNIFICATION            Architect produces C@m#hash bound to exact F@n#hash
      ▼
  codifiable() ──── FAILS ─────▶ mechanism-revision-required / binding-unavailable
      ▼
  DELIVERY COMMITMENT      accountable actor promises exact F@n obligations
      ▼                    separate engagement record, not semantic ratification
  DIRECTIVE ISSUANCE       that actor authors instructions bound to commitment
      ▼                    and C@m#hash; missing/stale links HOLD delivery work
  CODIFICATION             Builder produces source + manifest bound to C@m#hash
      ▼
  compilation · computation · evidence against issued Directives, committed
  Declaratives, satisfaction cases, and the original Want
      ▼
  a success criterion is UNMET, or met and you are still unhappy
      ▼
  earliestStageThatExplains(failure)
      ├─ computation / compilation / codification ──▶ Builder
      ├─ cognification ──▶ Architect        "the procedure was wrong"
      ├─ formalization ──▶ Formalizer       "the semantic contract was wrong"
      ├─ conceptualization ──▶ Client Partner "we read you wrong"
      └─ conception ──▶ you                 "you wanted something else"
                                             and this now has a NAME
```

Three properties make this different from today: a question that blocks is a
state, not a courtesy; when it comes back wrong, the stage and return type are
named; every downstream artifact names its exact parent version and hash, so
the blast radius is computed before work resumes.

### 16.5 One detail worth preserving

> *"One deliberate deviation from the brief, worth being explicit about: the 200
> does not come before verification and persistence."*

The brief said acknowledge immediately. The want was *never lose a billing
event*. The implementer noticed the literal instruction contradicted the intent
and proposed the safer ordering. Under the clarified flow, the Formalizer and
Client Partner must confirm the corrected required truth; the committer reviews
its delivery promise and reissues the Directive before execution. The rationale
is valuable evidence of a conflict, not authority to rewrite the contract. This
catches an intentional-layer failure before implementation; today the rationale
survives only as a paragraph in a README that nothing diffs, versions, or audits. Under this plan it is a
`provenance.decisions` entry with a rationale, attached to S1, visible to the
Auditor, and carried into the handoff. **The good judgment already happens; it
just isn't kept.**

### 16.6 Meta-example: this reconciliation

This documentation change was itself a small Wantware flow: conception ("make
Formalizer a real role; Cognifier builds from it"), conceptualization (identify
the collision with the Agency's existing Codifier), formalization (fix seven
stage names, authorities, invariants, and contract types), cognification (map
Formalizer → Architect/Cognifier → Builder/Codifier and order the kernel
changes), codification (these documents), compilation (links, examples,
cross-references), computation (people and eventually the Agency act from it). This stage mapping
alone does not evidence the full speech act flow: the delivery commitment and
committer-authored instructions need their own engagement trace, and document
consistency does not establish fulfillment of the originating Want.

Applying the model found omissions in the model: the integration design depended
on `SatisfactionCase` before the shared schema formalized the warrant between
evidence contracts and observation plans; an early example put a concrete test
path inside a semantic case; the 0.2 handoff carried readiness inline, which left
no place to assess the source stratum; the evidence record had no observer, so
the Witness Invariant was not computable from the IR. Each is fixed in IR 0.3.
These documents can still be self-consistent and wrong for the codebase or for
your intended institution. Repository inspection, worked encodings,
implementation tests, and your review remain independent evidence. The model
catches its own category errors; it does not certify itself.

---

## 17. Risks, and What Would Make Us Stop

```text
RISK                                        MITIGATION
──────────────────────────────────────────────────────────────────────────────
The live Scroll weakens a deliberate         Five disciplines (§10.3). Tier 3
v2.1 invariant.                              provenance-records every write. The
                                             amendment is written down as a weakening.
Renaming a role breaks replay.               Alias table. History is never rewritten.
Two ladders is real cognitive load.          They are orthogonal: five rungs, seven
                                             stages, one grid.
Ontology negotiation adds a round trip       Tiered. At Tier 0 the client ontology may
at intake; §39's problem in a new place.     be compact, but readiness and authority
                                             stay explicit.
Materialization data bloats every step.      Steps carry exact refs and required
                                             readiness only.
Internal closure creates false confidence.   Name it internal closure; test a closed but
                                             externally inadequate model; require
                                             tiered external-adequacy probes.
Hash changes create excessive stale radius.  Reverse-reference at node and contract
                                             granularity during calibration; never
                                             clear staleness by rebinding silently.
Formalizer overlaps Client Partner or        Authority table and graph walls: Formalizer
Architect.                                   authors; Client Partner ratifies; Architect
                                             designs.
Evidence contracts make the linter fire.     Expected for unwitnessed claims. Self-
                                             observation fires only where independence
                                             is actually required.
A large increase in apparatus for an         Stages 0–2 establish compatibility and
Agency whose governing value is KISS.        measurement. Stage 3 is the role commitment.
                                             Nothing after it proceeds without the stop
                                             condition below.
```

**The stop condition.** After Stages 1–3 land and Encoding I is written:

> If `acceptanceSelfCertified`, `unwitnessedClaim`, and `evidenceUnestablished`
> produce mostly noise rather than findings a person agrees with, or if the
> Formalizer cannot be distinguished from Client Partner and Architect outputs
> in the encoding, the model or role boundary is wrong and Stages 4–6 do not
> proceed.

A real stop, with a real criterion, decided before there is an investment to
defend.

---

## 18. First Pass

If only one thing happens, it should be this, in this order:

```text
1.  BASELINE   regenerate role references; run tests and the deterministic demo
2.  Stage 0    codifier → Productizer, with replay fixture
3.  Stage 1    SatisfactionCase, split epistemics, runtime transport correction
4.  Stage 2    immutable contract types, ActionGraph refs, stale/blast-radius test
5.  ENCODE     MonyTyme manually as F@n → C@m → CodificationManifest, as an IR 0.3 envelope
6.  READ       which findings are real; whether hash granularity is usable;
               whether closure misses a concern an external probe finds
7.  Stage 3    add the Formalizer; validate that its artifact and authority stay
               distinct from Client Partner and Architect
8.  DECIDE     stop, revise, or continue to the Architect/Builder integration
```

The vertical slice is deliberately narrow: one compatibility migration, one
honest satisfaction path, one version chain, and one semantic role boundary.

---

## 19. Decisions Recorded

Per §25's discipline: what was decided, on what basis.

```text
D-01  The Materialization Ladder has seven stages: Conception, Conceptualization,
      Formalization, Cognification, Codification, Compilation, Computation.
      "Materialization transition" is the generic movement; Formalization names
      only semantic work.
      BASIS: one term must name one concept.

D-02  The existing Agency Codifier becomes Productizer, with historical alias
      codifier → Productizer; records are never rewritten.
      BASIS: its graph crystallizes cognition and does not formalize semantics
      or codify source. Replay remains interpretable.

D-03  Formalizer is a genuinely new Production Role Model with semantic
      authorship and custodianship.
      BASIS: meaning and mechanism are distinct epistemic authorities.

D-04  The existing Architect acts as the Agency Cognifier in v0.1. The Builder
      fulfills the Wantware Codifier function. A separate Cognifier requires
      evidence from the encodings, not symmetry in the vocabulary.

D-05  The client remains semantically sovereign. The Formalizer authors; the
      Client Partner obtains confirmation and ratifies the exact semantic
      version on recorded client authority. No author self-ratifies.

D-06  Client and Agency ontologies are separate, connected by an explicit
      alignment map rather than inheritance.
      BASIS: reuse must not normalize or silently parent client meaning.

D-07  Boundedness is necessary and insufficient. formalizable(), cognifiable(),
      and codifiable() gate their respective handoffs and return blocking and
      advisory reasons as ReadinessAssessment records.

D-08  Semantic, cognitive, and materialization strata are immutable,
      independently versioned, content-hashed, and parent-bound. Upstream change
      marks reverse-referenced descendants stale and computes blast radius.

D-09  ActionGraph steps carry exact semantic/cognitive refs and required
      readiness. They do not duplicate materialization, frame, or epistemics.

D-10  Epistemic state is separate from acquisition status; the field names are
      epistemicState and acquisitionStatus. Satisfaction is a claim supported by
      an explicit warrant and evidence. Self-observation may contribute but
      cannot alone meet a required independence condition.

D-11  Internal graph closure means consistency relative to a declared frame,
      not external completeness. Tier policy supplies external-adequacy probes.

D-12  The Scroll is the runtime epistemic store and gains a live region. The
      Scroll Invariant is amended, and the amendment is a weakening.
      BASIS: the baton is the only channel between runners, and the coach needs
      it too; writer and contract-version attribution constrain the weakening.

D-13  The expression language is derived from three encodings, not designed.
      Order fixed: MonyTyme, Trindex, MENTIC. Encoding I may not be used alone.
      BASIS: Encoding I is the case that fits.

D-14  WantwareIR 0.3 is the serialization the kernel types validate against.
      Readiness, ratification, and revision requests are first-class IR records;
      the Agency's SemanticContract, MechanismDesign, CodificationManifest,
      SemanticRatification, and ReadinessAssessment are projections of that
      envelope, not a parallel format.
      BASIS: one representation, or the two will drift.

D-15  Typed returns use one vocabulary at both levels: the IR's
      RevisionRequest.kind values and the kernel's FINDING_KINDS names are the
      same words in different casing.
      BASIS: a return that changes its name crossing the seam is a return
      nobody can trace.

D-16  Carry the speech act sequence through the existing seven stages and four
      strata. The committer authors issued Directives; semantic ratification,
      permission, readiness, and handoff acceptance are distinct from delivery.
      IR 0.3 lacks dedicated commitment and Directive issuance/authorship links.
      Keep exact-bound engagement records today; coordinate a versioned contract
      amendment and missing/stale-trace gates before claiming machine enforcement.
      BASIS: representation validity cannot prove accountable delivery.
```

## 20. Open Questions

```text
Q-A  What evidence would justify splitting a Cognifier from the Architect?
     Candidate triggers: a stable non-architectural cognitive product, an
     authority conflict, or a role graph that cannot stay bounded.

Q-B  Do graded success criteria extend SatisfactionCase, or form a second kind?
     Encoding II decides this and nothing before it should. (§15.2)

Q-C  Who confirms a requirement when the client is the Agency? §25 requires a
     client utterance, while Encoding II makes author, Agency, and client
     partially coincide. Separation still needs a concrete ratification path.

Q-D  How is an experiencer's provenance captured when the experiencer is not
     in the room? Encoding III must distinguish first-person evidence, proxy
     report, and designer inference. (§15.3)

Q-E  What is the smallest stable hashing unit: whole contract, section, or node?
     Whole-contract hashing is simple; node hashing narrows blast radius. The
     encodings should measure replay and audit cost before v0.1 fixes it.

Q-F  How much of a warrant must be executable? Functional predicates can be
     deterministic; ergonomic, experiential, and ethical warrants may remain
     reviewed arguments. Neither should impersonate the other.

Q-G  Which external-adequacy probes does each tier require? Closure is cheap and
     internal. Client readback, domain review, counterexamples, user research,
     and operational observation have different costs and blind spots.

Q-H  Who may clear staleness as non-impacting, and at what granularity? It
     cannot be the downstream artifact's author alone, or hash binding becomes
     ceremony.

Q-I  What conflict rule governs simultaneous live-Scroll writes by runner and
     Executive? Writer attribution is settled; ordering and reconciliation are
     design work still to be calibrated.

Q-J  How should aliases appear at external boundaries? Internal replay should
     canonicalize codifier → Productizer; audit exports may need to display
     both identities so a signature never appears rewritten.

Q-K  Does the Agency ontology alignment map belong in the IR as a general
     `ontology.alignments` domain, or stay an Agency-side artifact referencing IR
     ids? Encoding III, with its third ontology, is the case that decides.
```

---

## 21. What Would Be True If This Works

```text
A client-sovereign meaning would have a custodian, an author, a recorded
ratification, and an immutable version.

A cognitive design would name the exact semantic hash it interprets, and source
would name the exact cognitive hash it materializes.

An acceptance condition would be a claim with a warrant and evidence. An actor's
own observation could contribute without impersonating an independent witness.

An unknown would have both an epistemic state and an acquisition status, so
NOT_QUERIED could not silently become false or failed.

The modelled world would declare its frame. Closure could find internal gaps;
external review and observation would still be required to challenge adequacy.

A required behavior would remain semantic, a realization capability would remain
cognitive, and a concrete binding could change without re-eliciting intent or
redesigning the mechanism.

An open question would block the particular handoff it makes unsafe. A bounded
partial artifact could remain valid without pretending to be ready for the next.

An upstream amendment would compute its downstream stale set before work resumed.

A failure would name the earliest stage at which truth broke and return there in
a typed envelope, so downstream roles could not repair it by changing upstream
meaning in place.
```

> **Wantware says what must be true, what may change, what can cause it, how we
> know it happened, and what counts as success.
> ACE³ says who may say so, on whose authority, at what cost, to whom it is
> owed, and when it stops.
> Wantware also expresses who commits to those truths and the instructions
> that committer issues. ACE³ gives those obligations institutional force.
> Together they require evidence of the original Want before declaring delivery.**

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
