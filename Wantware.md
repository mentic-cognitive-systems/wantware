# Wantware — The Software Factory Model

**Status:** Specification. This is the seven-stage model. It supersedes the
four-stage factory (Cognification → Codification → Compilation → Computation)
and every earlier draft; Appendix B records what changed and why.\
**Companions:** [WantwareIR.md](./WantwareIR.md) defines the representation.
[Adding the Wantware Representation to the Agency.md](./Adding%20the%20Wantware%20Representation%20to%20the%20Agency.md)
defines how it enters ACE³.\
**Precursor:** `Agency/agenticCognition.md` develops the cognitive-control
argument this model grew from. Read it for the reasoning; use this document for
the vocabulary.

---

## 1. Thesis

Wantware is a software-production architecture in which a vague want becomes
executable machinery through seven kinds of transformation:

```text
CONCEPTION ↔ CONCEPTUALIZATION ↔ FORMALIZATION ↔ COGNIFICATION ↔ CODIFICATION ↔ COMPILATION ↔ COMPUTATION
```

The downward direction is **realization**. The upward direction is
**reflection and repair**. Execution continuously generates evidence that may
force reconsideration at any higher level, so every boundary is bidirectional.

Three commitments hold the model together.

**They are kinds of transformation, not a document waterfall.** One graph
element may already have a confirmed semantic definition while its neighbor is
still conceptual; one mechanism may be codified while another is still being
designed. Each element carries its stratum, version, provenance, and validation
state. Typed handoffs advance or return only the affected elements and
invalidate their dependents when necessary.

**Three authorities never silently rewrite each other.** A Formalizer has
custody of meaning, a Cognifier of mechanism, a Codifier of materialization. A
role that discovers a defect upstream returns a typed issue to the owner; it
does not patch the owner's artifact.

**Evidence decides.** Completion is a property of state, not of a model's
confidence. A claim is established only when the observations its satisfaction
case requires have been acquired and the warrant survives.

The purpose of the factory is therefore not to generate code from prompts. It is
to progressively transform **want into trustworthy computation**, and to carry
what reality teaches back up to the layer that can use it.

The seven transformations carry the speech act sequence defined in
[The WantWare Development Process §3.1](../../../architectures/The%20WantWare%20Development%20Process.md#31-the-speech-act-flow):

```text
Expressive Want → Assertive account of current and wanted states
→ Declarative required truths → Commissive delivery commitment
→ committer-authored Directives → executable Imperatives
→ evidence of fulfillment against the original Want
```

These are obligations carried through the factory, not seven replacement stage
names. Conception preserves the Expressive; Conceptualization and Formalization
establish Assertives with evidence, assumptions, and unknowns kept distinct.
Formalization states the Declaratives needed to bridge the gap. An accountable
actor then commits to delivering those conditions before authoring Directives
for their realization. Cognification develops those instructions and their
mechanism; Codification, Compilation, and Computation turn them into executable
Imperatives and observed effects. Evidence closes the loop against both the
required truths and the original Want.

Client confirmation of meaning, permission to act, and the actor's delivery
commitment are distinct. A confirmed semantic contract or an approved design
does not by itself establish a Commissive. The committer may act through the
Cognifier and other delegated roles, but remains accountable for issuing the
Directives and for the declared scope and conditions of delivery. These are
process obligations of this specification, not a claim that the current runtime
already enforces each speech act.

> **Wantware is a software-production architecture in which conception becomes
> intentional conceptualization; a Formalizer gives that intent precise,
> versioned meaning under the client's semantic sovereignty; a Cognifier designs
> a mechanism that satisfies the semantic contract; and a Codifier materializes
> that mechanism as source for compilation and computation. A stratified
> WantwareIR preserves source, semantic, cognitive, and materialization
> representations, while typed evidence and issues propagate upward to the
> authority able to refine the affected representation.**

---

## 2. The Seven Stages

| Stage | Question | Substance | Artifact | Custodian |
|---|---|---|---|---|
| Conception | What is wanted? | Want | The words, verbatim | Source authority |
| Conceptualization | What do I mean by what I want? | Intent | A recorded reading | Interpreter (Client Partner in ACE³) |
| Formalization | What exactly is wanted, and what must remain true? | Semantic contract | `SemanticContract@v` | Formalizer |
| Cognification | What mechanism satisfies that contract? | Mechanism design | `MechanismDesign@v` | Cognifier |
| Codification | What source materializes the mechanism? | Source | `CodificationManifest@v` | Codifier |
| Compilation | Can the source become runnable machinery? | Executable form | Build artifacts | Build tooling |
| Computation | What happens when it runs? | State transition, evidence | Execution trace | Runtime |

Or, compactly:

```text
WANT → INTENT → SEMANTIC CONTRACT → MECHANISM DESIGN → CODE → MACHINE → ACTION
```

### 2.1 Conception

Conception is the origin of desire, dissatisfaction, curiosity, or imagined
change. It may be vague, incomplete, contradictory, emotional, or only partly
linguistic:

```text
"I don't want to miss anything important."
"I want the house to take care of itself."
"What if software could build itself from intent?"
```

Conception does not require a plan. It establishes a coarse difference between a
perceived present state and an imagined preferable one. Contradiction is
permitted and is not yet a defect.

```js
const Conception = {
  presentSense: {},
  desiredDifference: {},
  notions: [],
  tensions: [],
  possibilities: [],
  confidence: "low | partial | evolving"
};
```

There is something prior to conception: a chaotic and noisy field ofstimulus, senses, and signals,

memory, friction, and environment from which a **notion** emerges and becomes a
conception that will, over time, with recursive feedback, grow into a fully formed and nuanced construction. 
The factory does not formalize noise or notion as stages. They simply name the generative boundary from which conception arrives.

The artifact of this stage is the source's own expression, preserved unimproved.
This is the Expressive Want; it is not yet an evidenced account of reality or a
delivery commitment. Every later stage must remain traceable to it.

### 2.2 Conceptualization

Conceptualization gives the conception structure: names, categories,
boundaries, actors, objects, relationships, causal assumptions, desired state
changes, constraints, rough plans, and unresolved questions.

```text
CONCEPTION        "I don't want to miss anything important."

CONCEPTUALIZATION Important information may arrive through email, calendar,
                  messages, and tasks. Important means time-sensitive,
                  consequential, requiring action, or involving certain people.
                  The desired outcome is to notice important things, determine
                  what requires action, and surface those at the right time.
```

This is where **want becomes intent**. The reading is recorded as a reading,
distinct from the conception it interprets and from the formal meaning that will
follow. Each conceptual statement carries who authored it, what source material
it reads, and whether the source authority has confirmed it.

Assertives distinguish observations of the current state from the interpretation
of the wanted state. Evidence can establish what the source expressed or
confirmed; it does not establish that the wanted outcome already exists.
Unverified causal assumptions and missing observations remain explicit rather
than becoming facts through repetition.

```text
CONCEPTION          "I want something different."
CONCEPTUALIZATION   "This is approximately what I want to be different, and why."
```

### 2.3 Formalization

Formalization transforms conceptualized intent into a precise, versioned
**semantic contract**. The Formalizer establishes the logical world within which
later reasoning is permitted:

```text
definitions · ontology · actors and authorities · entities, relations, allowable
states · intent and desired changes · constraints and invariants · permissions
and prohibitions · success claims and acceptance criteria · evidence
requirements · warrants and satisfaction cases · frames and scope ·
assumptions, ambiguities, and unknowns
```

The Formalizer has **custody of the semantic contract, not sovereignty over the
client's meaning**. It may expose ambiguity, reject contradiction, make
consequences explicit, and propose refinements. It may not silently change the
want. Any material semantic amendment returns to the source authority for
confirmation and produces a new contract version.

The Formalizer is also forbidden from prematurely choosing implementation. It
states what evidence is required and why that evidence would warrant a claim;
it does not choose the database, API, algorithm, observer, or interface that
will produce it.

```text
CONCEPTUALIZATION   "This is approximately what I mean."
FORMALIZATION       "These are the precise meanings, claims, constraints, frames,
                     and unknowns that later designs must preserve."
```

Within that contract, distinguish Assertives about what is known from
Declaratives specifying what must become true to bridge the current/wanted gap.
The latter define fulfillment without choosing its implementation. Before work
is directed, an accountable delivery actor must make a separate Commissive to
those Declaratives, including scope, dependencies, and conditions. The
Formalizer's custody and the client's semantic ratification do not supply that
commitment or permission to execute on their own.

### 2.4 Cognification

Cognification is the domain of active reasoning and realization design. Humans,
models, or both consume the formalized contract and develop a mechanism from
which software can be constructed:

```text
architecture · procedures · plans · workflows · algorithms · capabilities ·
component responsibilities · information flows · decisions and rationale ·
dependencies · failure modes and recovery paths · observation designs ·
feasibility findings · validators and tests derived from evidence requirements
```

These are structured thought artifacts, not yet source. Cognification must
preserve the contract it consumes. It may determine that the contract is
incomplete, contradictory, or unrealizable, and it reports that through a typed
return to Formalization rather than by altering meaning.

Feasibility exploration may precede a delivery commitment. Once an actor has
made that Commissive, the actor authors the Directives, using the Cognifier role
to develop assigned work, procedures, dependencies, and completion criteria.
A proposed mechanism is therefore distinct from instructions issued under a
delivery commitment; both remain distinct from the Imperatives that execute
them. If feasibility findings invalidate the commitment's conditions, record
that issue and revise or escalate it explicitly before directing affected work.

Cognification is where the earlier four-stage model's "codification" actually
lived; the separation restores each word to one job:

```text
FORMALIZATION   creates the semantic contract for the system
COGNIFICATION   creates the mechanism design that satisfies that contract
CODIFICATION    creates the source-code representation of that mechanism
```

### 2.5 Codification

Codification is restored to its ordinary software-engineering meaning: the
translation of the cognified design into source while preserving traceability to
the contract it satisfies.

```text
architecture · procedure · policy · capability · decision · dependency · schema ·
success validator · failure mode · observation design · test

        ↓ CODIFICATION

TypeScript · Rust · Python · SQL · HTML · CSS · WASM · configuration ·
infrastructure-as-code
```

```js
codify(mechanismDesign, semanticContractRef) => sourceArtifacts;
```

Agents may perform most of this work. They are no longer asked "what should the
system mean?" and "write the implementation" as one indivisible operation. The
separation creates an inspectable boundary between reasoning and implementation.

### 2.6 Compilation

Compilation retains its conventional meaning: parsing, type checking, linking,
dependency resolution, transpilation, optimization, bundling, code generation,
container construction, deployment packaging. For interpreted systems it is the
transformation from source specification into runnable form.

### 2.7 Computation

Computation is the actual execution of the compiled or interpreted system.
Instructions execute, state changes, data moves, tools act, transactions occur,
outputs appear. Its responsibility is deliberately narrow:

```text
Observe state. Choose the legal next operation. Execute. Capture the result.
Verify the postcondition. Update state. Repeat.
```

These executable Imperatives fulfill the issued Directives. Their effects must
be checked against the committed Declaratives and original Expressive; completing
an instruction list alone does not establish fulfillment.

The runtime uses the least expensive machinery proven capable: deterministic
code, state machines, validators, tool calls, transaction semantics, explicit
retry policy, and the cheapest model adequate to any bounded decision that
remains.

Determinism belongs to the process contracts: explicit state, obligations,
validation, and defined success, failure, retry, and escalation branches.
Probabilistic work is permitted within those boundaries, with outputs accepted
only after the applicable checks. Neither deterministic orchestration nor a
delivery commitment guarantees external outcomes; missing evidence or failed
conditions leave fulfillment unestablished and trigger the defined return path.

### 2.8 A spectrum from meaning to mechanism

The stages are a gradient. Cognition progressively loses degrees of freedom as
it becomes machinery, and that is exactly what makes the result trustworthy.

```text
POSSIBILITY SPACE

█████████████████████████████   Conception          high semantic freedom
██████████████████████          Conceptualization
██████████████████              Formalization
██████████████                  Cognification
█████████                       Codification
████                            Compilation
█                               Computation         high determinism
```

Wantware converts **possibility into causation**. The narrowing occurs per graph
element and dependency, not across the whole system at once. A returned issue
may reopen one element's possibility space while unrelated confirmed and
materialized elements stay intact.

Wantware is radical primarily **above the code boundary**. Below it, ordinary
software engineering becomes dominant. The model does not replace decades of
reliable practice; it feeds those practices with something better than a prompt.

---

## 3. Three Roles, Three Authorities

The Formalizer/Cognifier distinction is between **formalizing what is meant**
and **determining what must be done**. Suppose the source says:

> "Users should be able to recover their account without compromising their
> encrypted data."

Two substantially different transformations precede source code.

The **Formalizer** asks what the statement means, precisely. What is a User, an
Account, Recovery? What does "encrypted data" mean? What security properties
constitute "without compromising"? What actors, resources, states, relations,
invariants, permissions, and constraints exist? What would count as successful
recovery, and what evidence would establish it? Its output is declarative: a
formally constrained model of the desired reality.

The **Cognifier** asks, given that formalized world, how the desired state can
be brought about. Which recovery mechanisms satisfy those constraints: recovery
key, trusted devices, secret sharing, escrow? What are the failure modes? What
procedure transitions LockedOut → Authenticated → Recovered? Which components
participate, what checks occur in what order, what information flows where? Are
there contradictions or missing facts requiring a trip back to Formalization?
Its output is procedural and architectural.

The **Codifier** materializes that mechanism as executable machinery: types,
modules, schema, APIs, control flow, library calls, tests, configuration, build
artifacts.

The Agency **Integrator** then works on a different question: whether a
provisional implementation can settle into a coherent, stable candidate. It
may compile and integrate the materialization, resolve mechanical
inconsistencies, run contract checks, and package a reproducible artifact. It
does not acquire authority over meaning, design, or success. A passing build is
only evidence about realization; independent validation determines whether the
candidate's observed behavior establishes the semantic success claims.

The Integrator is not the Agency **Productizer**. The Productizer works
across engagements on the Cognition Ledger, proposing deterministic
replacements for recurring cognition (§8.4); the Integrator works inside one
engagement on one build.

```text
FORMALIZER   meaning        → formal meaning
COGNIFIER    formal meaning → mechanism
CODIFIER     mechanism      → source
INTEGRATOR   source          → coherent, evaluation-ready candidate
```

### 3.1 Where ontology sits

Cognition requires an ontology to reason over, but ontology is not cognition. A
chess engine's ontology says: board, square, piece, king, rook, legal move,
check, capture, player, turn. Its cognition says: given this board and these
rules, what sequence of moves reaches checkmate?

```text
ONTOLOGY       What exists and what can be true?
COGNITION      Given what exists and what is desired, what follows?
CODIFICATION   How is that solution expressed as executable instructions?
```

The Formalizer creates the logical space within which the Cognifier thinks, and
it owns the whole semantic contract, not the ontology alone.

### 3.2 The authority table

| Role | Authority | Fundamental question | Must not silently do |
|---|---|---|---|
| Source authority (client) | Semantic sovereignty | What do I actually want? | Have its meaning replaced by a model's convenient inference |
| Formalizer | Semantic custody | What exactly is wanted? | Choose implementation, or amend meaning without confirmation |
| Cognifier | Reasoning and design | What mechanism satisfies the contract? | Change the contract |
| Codifier | Materialization | How is that mechanism expressed in source? | Invent design or requirements |
| Integrator (Agency) | Realization and stabilization | Does this materialization cohere as a stable candidate? | Self-certify semantic success or silently redefine the mechanism |

```js
const Formalizer = {
  consumes: "Conceptualization@version",
  produces: "SemanticContract@version",
  hasCustodyOf: ["ontology", "intent", "constraints", "invariants",
                 "success claims", "evidence requirements",
                 "warrants and satisfaction cases", "frames", "unknowns"],
  mustNot: ["claim semantic sovereignty over the source",
            "silently change meaning", "choose implementation prematurely",
            "ratify its own reading"]
};

const Cognifier = {
  consumes: "SemanticContract@version",
  produces: "MechanismDesign@version",
  designs: ["candidate and selected mechanisms", "architecture", "procedures",
            "capabilities", "decisions", "dependencies", "failure modes",
            "observation plan", "satisfaction mappings"],
  mustNot: ["silently change meaning", "reason against an unversioned contract"]
};

const Codifier = {
  consumes: "MechanismDesign@version",
  produces: "CodificationManifest@version",
  materializes: ["bindings", "source", "tests", "schema", "configuration",
                 "build artifacts"],
  mustNot: ["invent design", "invent requirements"]
};
```

The roles are bidirectionally coupled, not a waterfall:

```text
Source authority ↔ Formalizer ↔ Cognifier ↔ Codifier
```

The Cognifier can discover that the formalization is underspecified. The
Codifier can discover that the mechanism is impossible or awkward. Those
discoveries propagate backward as typed returns; each role retains authority
over its own representation. Three epistemic boundaries with typed handoffs are
more useful than three agents producing documents in sequence, because the
system always knows which kind of reasoning is occurring and who may alter which
truths.

One human or model may operationally perform several roles. The roles remain
logically distinct: **the active role determines which truths the agent may
alter and which issues it must return across a boundary.**

### 3.3 The Auditor

An independent auditor may inspect every stratum: conceptualizations, semantic
contracts, mechanism designs, IR, source, execution traces, observed outcomes. An
audit finding returns to the role authorized to change that stratum. The auditor
never repairs an artifact it did not author.

### 3.4 Humans and AI share the semantic and cognitive planes

Neither Formalization nor Cognification inherently belongs to AI. They are
domains occupied by any reasoning agent acting under the corresponding authority.

```text
          FORMALIZATION ↔ COGNIFICATION

        HUMAN ──── discussion ──── AI AGENT
              ──── critique ────
              ──── planning ────
              ──── modeling ────
              ──── validation ──
              ──── synthesis ───
                      │
                      ▼
        SEMANTIC CONTRACT ↔ MECHANISM DESIGN
```

A human might conceive and conceptualize. A model acting as Formalizer might
elaborate the ontology while preserving explicit unknowns and requesting
confirmation of semantic changes. Another model acting as Cognifier might design
a mechanism or challenge whether the contract is realizable. A deterministic
validator checks consistency. A frontier model audits the result. Eventually the
contract is confirmed and the design converges enough to permit codification.

---

## 4. Semantic and Cognitive Declaratives

Here “declarative” also describes a representation style: a model can declare
facts about a proposed mechanism. That usage must not collapse the speech act
sequence. Assertives record evidenced state; Declaratives specify required
truths; a Commissive binds an actor to delivery; that committer's Directives
prescribe work; Imperatives execute it. A cognitive model can describe proposed
Directives without yet issuing them or committing anyone to their delivery.

The declarative architecture spans two distinct strata and authorities.

The Formalizer produces **semantic declaratives**:

```text
INTENT
   ↓
ONTOLOGY: definitions + relationships (entities + verbs + links: Subject Verb Object)
   ↓
ALLOWABLE STATES AND TRANSITIONS
   ↓
CONSTRAINTS + INVARIANTS
   ↓
SUCCESS CLAIMS
   ↓
EVIDENCE REQUIREMENTS
   ↓
WARRANTS + SATISFACTION CASES
   ↓
FRAMES + UNKNOWNS
```

They answer: **what exists in this modeled world, what can be true, what is
wanted, and what must remain true?**

The Cognifier produces **cognitive declaratives**:

```text
SEMANTIC CONTRACT
   ↓
ARCHITECTURE
   ↓
CAPABILITIES
   ↓
PROCEDURES + STATE TRANSITIONS
   ↓
DECISIONS + DEPENDENCIES
   ↓
FAILURE + RECOVERY MODES
   ↓
OBSERVATION DESIGN
```

They answer: **what mechanism could realize the desired change while satisfying
this exact semantic contract?**

Together they form a **type system for agency**. An agent cannot invent
arbitrary action; it must operate through declared entities, constraints,
capabilities, and transformations. But the two are not interchangeable. Semantic
declaratives govern meaning; cognitive declaratives govern realization. A
cognitive declaration must cite the contract version it satisfies. A semantic
declaration must not acquire implementation choices because a mechanism happens
to be convenient.

### 4.1 From word to ontology

A word alone is ambiguous. The moment you define what the word means, what type
of thing it denotes, how it relates to other things, what states it can take, and
what constraints apply, you have started building an ontology.

```text
WORD Customer
MEANS:
    a Party that has entered a commercial relationship with Organization
WORD ActiveCustomer
MEANS:
    Customer
    where account.status = Active
WORD Purchase
MEANS:
    transfer-of-ownership
    from Seller
    to Buyer
    of Product
    in-exchange-for Payment
```

Definitions compose. Once Purchase, Customer, Product, and Payment have formal
meaning, the source can say:

```text
I WANT:
    ActiveCustomer can Purchase AvailableProduct
```

That is the essential distinction between prompting and intent programming. A
prompt tells a model something in language and relies on it to infer what the
words mean. An intent program uses language whose important terms already have
machine-addressable meaning.

> **Formalized intent is the semantic contract of execution.**

### 4.2 The structure of intent

Intent adds a layer over the ontology: what change, outcome, obligation, or
capability is desired.

```text
Intent = Actor + Modality + Action + Target + Context + Constraints
       + Desired State + Success Criteria
```

An intent is a typed transformation over the semantic graph:

```text
Given:  Customer(c)  Product(p)  Active(c)  Available(p)
Want:   exists Order(o)  belongsTo(o, c)  contains(o, p)  status(o) = Submitted
```

which reduces to:

```text
I = (P, G, C)

P  the precondition graph
G  the desired goal graph
C  the constraints and invariants that must hold during the transformation

INTENT:
    FROM  <valid semantic state>
    TO    <desired semantic state>
    WHILE <preserving constraints>
```

The complete output of Formalization is broader than intent:

```text
Semantic Contract =
    Source + Ontology + Intent + Constraints + Invariants
    + Success Claims + Evidence Requirements + Warrants
    + Satisfaction Cases + Frames + Unknowns
```

### 4.3 A worked contract and its mechanism

Suppose a customer expresses, “I want to submit my purchase and know its items
are reserved.” Assertives establish the customer's recorded account status and
observed availability for the quantity and region, with timestamps and unknowns
kept explicit; they also record the customer's confirmed wanted state. The
Declarative portion of the semantic contract specifies the required truths:

```text
INTENT CreateOrder
actor:
    Customer
wants:
    create Order
where:
    Order.customer = Customer
    Order.items contains one-or-more Product
constraints:
    Product.isAvailable = true
    Customer.accountStatus = Active
results-in:
    Order.status = Submitted
    Inventory.reservedFor(Order) = true
success-when:
    Order.id exists
    Order.status = Submitted
    Inventory.reservedFor(Order) = true
    Payment.authorizationStatus = Authorized
evidence-required:
    Order.id and Submitted status were persisted
    Inventory authority confirmed the reservation for this order and quantity
    Payment authorization response was observed
warrant:
    those observations establish submission, reservation, and authorization within this frame
independence-required:
    inventory reservation is observed from the inventory authority
    payment authorization is observed from the payment authority
frame:
    availability is evaluated for the requested quantity and fulfillment region
unknowns:
    policy for partial inventory availability
```

It prescribes no execution order and chooses no implementation. It describes
meaning, desired state, invariant conditions, and what evidence would justify a
success claim.

Before directing delivery, the ordering service's accountable actor makes a
Commissive: “I commit to submitting this order with its inventory reserved under
Purchase@4, subject to verified availability and payment authorization; a decline
or lost reservation follows the defined failure path and is not fulfillment.”
Client ratification of Purchase@4 and authority to reserve inventory or authorize
payment are separately required.

The corresponding cognitive model describes the mechanism from which that
committer authors the Directives:

```text
MECHANISM PurchaseCapability
based-on:
    SemanticContract Purchase@4
architecture:
    Catalog + Ordering + Inventory + Payment
capabilities:
    quote, authorize-payment, reserve-inventory, submit-order
procedure:
    a state-transition design satisfying Purchase@4
dependencies:
    inventory authority, payment authority
failure-modes:
    unavailable product, declined authorization, lost reservation
observation-design:
    evidence for every success claim in Purchase@4
```

The committer's Directives instruct the responsible components to verify
preconditions, authorize payment, reserve inventory, submit the order, and
acquire the required evidence, with dependencies and recovery branches made
explicit in the mechanism design. Codification and Compilation materialize that
accepted design into executable Imperatives without inventing requirements.
Computation executes the operations and records their effects. Submission,
authorization, and reservation evidence must establish the contract's success
claims and satisfy the customer's original Want; a successful API call alone
does not close the commitment.

### 4.4 Proof obligations at each boundary

The forward handoffs carry obligations as well as data:

```text
semanticFidelity(SemanticContract@v, ConfirmedConceptualization@u)

MechanismDesign@w        ⊨ SemanticContract@v
CodificationManifest@x   ⊨ MechanismDesign@w
establishes(ObservedEvidence, SatisfactionCases(SemanticContract@v))
```

The Formalizer must justify semantic fidelity. The Cognifier must justify
contract satisfaction. The Codifier must justify design conformance. The running
system must produce the evidence the contract said would justify its success
claims.

Handoff readiness must also preserve the speech act lineage: evidenced state
supports the required truths, an identified actor commits to them, that actor
authors the issued Directives, and executable operations trace back to those
instructions. Semantic confirmation, execution authorization, and delivery
commitment are separate review questions. Outcome evidence must show that the
Directives fulfilled the committed Declaratives and the original Want, rather
than merely that the source conformed to the design.

The Integrator supplies realization evidence: build, integration, reproducible
packaging, and contract-check results for a candidate. A failure is returned to the
lowest authoritative explanatory stage: a broken binding or source conformance
issue to Codification, an unworkable procedure to Cognification, and a
contradiction in the claimed result to Formalization. It must not creatively
repair an ambiguity by changing the contract. Validator/Auditor independence
remains required for establishment of success claims.

---

## 5. Evidence, Claims, and Satisfaction

### 5.1 Three things that are not the same

```text
tool returned  ≠  operation succeeded  ≠  desired state was achieved
```

The environment is authoritative: `modelBelief !== worldState`. Every meaningful
action follows:

```text
ACTION → OBSERVABLE RESULT → NORMALIZED EVIDENCE → SEMANTIC POSTCONDITION → STATE TRANSITION
```

rather than: action → model assumes it worked → model continues.

```json
{
  "action": "create_record",
  "transport": { "status": "success" },
  "evidence":  { "recordsCreated": 0 },
  "expected":  { "recordsCreated": 1 },
  "semanticOutcome": "FAILED"
}
```

Transport success is not semantic success. That one distinction removes a large
class of agent hallucination.

### 5.2 Requirement, observation, binding, record

Evidence crosses every authority boundary, so its parts are owned separately:

```text
EVIDENCE REQUIREMENT   what must be observed to establish a claim     Formalizer
OBSERVATION MECHANISM  how that observation can be acquired           Cognifier
CONCRETE BINDING       which tool, query, API, or test realizes it     Codifier
EVIDENCE RECORD        what was acquired and what it warrants          Runtime
```

Several observation mechanisms may satisfy one stable requirement. A failed
mechanism can be replaced without rewriting what counts as evidence. Concrete
endpoints, selectors, fixtures, and adapters are materialization bindings, never
evidence requirements.

### 5.3 Satisfaction cases

An evidence contract says what must be observed. It does not by itself say why
those observations justify a success claim. A **satisfaction case** makes the
inference explicit:

```text
CLAIM      the state asserted to be true               (a success criterion)
WARRANT    why the named observations justify it       (rule + mode + assumptions)
EVIDENCE   the contracts whose observations are required
```

```js
SatisfactionCase({
  successCriterionRefs: ["wantware://success/calendar-reviewed"],
  warrant: {
    rule: "a complete query with a KNOWN or KNOWN_ABSENT result establishes that the configured calendar was reviewed",
    mode: "hybrid",                        // executable | reviewed | hybrid
    assumptionRefs: ["wantware://assumption/calendar-query-complete"]
  },
  evidenceContractRefs: ["wantware://evidence/calendar-reviewed"],
  independenceRequirement: "policy-dependent",
  frameRefs: ["wantware://frame/configured-calendars"],
  defeaterRefs: []
});
```

The warrant matters. Four passing assertions do not establish an unrestricted
claim about every possible input; they establish it only if the frame says those
inputs are representative and the warrant survives review. A claim can be
rejected even though every observation is `KNOWN`: the evidence may be real and
the inference inadequate.

Some warrants are executable predicates. Ergonomic, experiential, and ethical
claims may require a reviewed argument. The representation preserves both
without disguising judgment as code.

**Independence.** Self-observation is useful diagnostic and corroborating
evidence. It is not independent evidence. Where the case, tier, or policy
requires an independent witness, an actor's observation of its own work cannot
be the sole support for the claim.

### 5.4 Two epistemic axes

Knowledge is typed, and it has two orthogonal dimensions:

```text
EPISTEMIC STATE                          ACQUISITION STATUS
KNOWN          a value is established    ACQUIRED            observation obtained
KNOWN_ABSENT   absence is established    NOT_QUERIED         not attempted
UNKNOWN        truth is unsettled        UNAVAILABLE         source cannot provide it
AMBIGUOUS      readings conflict         TOOL_FAILED         acquisition mechanism failed
                                         OBSERVATION_FAILED  attempted; no valid observation
                                         NOT_APPLICABLE      no observation was required
```

```js
{ value: [],   epistemicState: 'KNOWN_ABSENT', acquisitionStatus: 'ACQUIRED' }
{ value: null, epistemicState: 'UNKNOWN',      acquisitionStatus: 'NOT_QUERIED' }
{ value: null, epistemicState: 'UNKNOWN',      acquisitionStatus: 'TOOL_FAILED' }
{ value: 'x',  epistemicState: 'AMBIGUOUS',    acquisitionStatus: 'ACQUIRED' }
```

`TOOL_FAILED` is not a kind of truth. `KNOWN_ABSENT` is not a record of how a
fact was acquired. Neither a transport success nor an empty value alone
establishes `KNOWN_ABSENT`. Keeping the axes separate lets retry policy respond
to acquisition while readiness and satisfaction respond to epistemic truth.

This prevents the common collapse in which "no data" becomes "the model fills the
hole." Instead: no data → explicit epistemic state → legal behavior determined
by procedure.

### 5.5 Completion is state, not opinion

The model does not decide whether its own assignment is done.

```js
complete = requiredCriteria.every(c => establishes(c.satisfactionCase, observations, policy).established);
```

A claim must not be considered established while required evidence is
`UNKNOWN`, `AMBIGUOUS`, `UNAVAILABLE`, `NOT_QUERIED`, `TOOL_FAILED`, or
`OBSERVATION_FAILED`, or while the warrant, frame, version binding, or required
independence fails.

### 5.6 Procedure is not success

The procedure is how we intend to achieve something. The success criteria are
what reality must demonstrate. They are separate objects so that the factory can
discover a procedure was wrong without losing sight of the intent it was meant to
satisfy, and so that competing mechanisms can be evaluated against the same
contract.

> The procedure may be wrong. The success criteria remain the judge.

---

## 6. Six Truth Modes

```js
const TruthModes = {
  INTENTIONAL:   "What does the source appear to want?",
  SEMANTIC:      "What does the confirmed contract mean and require?",
  REALIZATION:   "What mechanism is claimed to satisfy that contract?",
  CODIFIED:      "What behavior does the source implementation specify?",
  IMPERATIVE:    "What will the executable machinery actually do?",
  OBSERVATIONAL: "What did reality show actually happened?"
};
```

Intentional truth spans conception and conceptualization and remains answerable
to the source authority. Semantic truth is formalized meaning, held in custody by
the Formalizer. Realization truth is the Cognifier's claim that a particular
architecture, procedure, and observation design can satisfy a particular contract
version. Codified and imperative truth become increasingly rigid through
Codification and Compilation. Observational truth comes from computation
interacting with reality.

These truths do not entail one another. A coherent contract may have no known
feasible mechanism. An elegant mechanism is invalid if it silently changes the
contract. Agency itself is the continuous reconciliation among them.

---

## 7. The Reverse Path

All transitions are bidirectional. When computation produces a failure, the
factory asks successively:

```text
Was computation wrong?
        ↑
Was the executable incorrectly compiled?
        ↑
Was the source implementation wrong?
        ↑
Was the cognified mechanism wrong or incomplete?
        ↑
Was the formalized semantic contract wrong or incomplete?
        ↑
Was the conceptual model wrong?
        ↑
Was the original conception misunderstood?
```

Each boundary produces a distinct failure class:

```js
const FailureLayer = {
  CONCEPTION:        "The originating want was incoherent, contradictory, or unstable.",
  CONCEPTUALIZATION: "The want was structured or read incorrectly.",
  FORMALIZATION:     "A definition, intent, constraint, invariant, success claim, evidence requirement, frame, or unknown was represented incorrectly.",
  COGNIFICATION:     "The architecture, procedure, capability, dependency, failure model, or observation design did not satisfy the referenced contract.",
  CODIFICATION:      "The intended design was implemented incorrectly.",
  COMPILATION:       "The source could not be transformed correctly into executable machinery.",
  COMPUTATION:       "The machinery executed incorrectly or met environmental failure.",
  OBSERVATION:       "The system could not establish what actually happened."
};
```

The canonical example is the Slack message. Every tool call succeeded, the
procedure was correct, every requirement was met, and the user missed something
important, because `Message` was never an entity in the modeled world. That is
not an imperative failure. It is a semantic one, and no amount of perfect
execution repairs it.

### 7.1 Repair at the lowest layer that explains

Not every runtime failure should reopen human intent. The system repairs at the
lowest abstraction capable of explaining the problem:

```js
repair = lowestAbstractionLayerThatExplains(failure);
```

A runtime exception is a computation repair. An incorrect implementation of a
correct procedure is a codification repair. A faithful implementation of a
defective procedure is a cognification repair. A faithful mechanism for an
incomplete contract is a formalization repair. A precise contract for the wrong
conceptual understanding is a conceptualization repair. Only when necessary does
the system return to conception. A semantic change still requires confirmation
from the source authority.

> A system that fixes every failure by changing prompts will never become
> robust.

### 7.2 Backward travel is typed

A handoff is not permission for the receiver to mutate the sending stratum.
Discovery downstream does not transfer authority upstream.

| Return | From → To | Meaning |
|---|---|---|
| `conceptual-clarification-required` | Formalizer → interpreter / source | The reading is too ambiguous to formalize without inventing meaning |
| `semantic-clarification-required` | Cognifier → Formalizer | No mechanism can be designed without choosing a meaning the contract leaves open |
| `semantic-change-required` | any downstream role → Formalizer → source authority | The only viable repair alters intent, constraint, invariant, or success |
| `mechanism-revision-required` | Codifier or validator → Cognifier | Meaning is intact; the procedure or architecture is not workable |
| `binding-unavailable` | Codifier → Cognifier | No concrete dependency can realize a declared capability |

Every return carries the exact source and target versions and hashes, the
affected references, evidence, and a requested disposition. The receiving owner
issues a new version if the contract or mechanism changes; nobody patches the
caller's parent artifact in place. Exact bindings then make staleness and its
blast radius inspectable rather than implicit.

---

## 8. The Cognitive Economy and Crystallization

### 8.1 Separate cognition by timescale

Several different forms of thinking happen in a factory, and they should not
share one model:

```text
TURN-LEVEL        "Given this state, what do I do next?"          cheapest capable executor
TASK-LEVEL        "Have we actually accomplished the objective?"   supervisor; mostly deterministic
DESIGN-LEVEL      "What procedure should handle this situation?"   Cognifier; high capability
EVOLUTIONARY      "What did we misunderstand across 10,000 runs?"  independent auditor; frontier
```

The inversion this produces: **the most capable cognition is often furthest
from the user interaction.** Its work is amortized across thousands of cheaper
executions.

```text
Most capable cognition  ≠  most frequent cognition

high capability × high leverage × low frequency
low capability  × bounded work  × high frequency
```

### 8.2 Routing by leverage

```text
Required cognitive capability  ∝  Novelty × Ambiguity × Consequence × Planning horizon × Reuse leverage
```

Escalate when intent is novel or ambiguous, a new reusable procedure is
required, the ontology may be incomplete, valid plans have significant
trade-offs, the consequence of error is high, an executor repeatedly fails,
completion cannot be mechanically determined, or the architecture itself must
change. Do not escalate when missing data can simply be represented as missing, a
deterministic validator can answer, the task is a routine transformation, a
known procedure exists, or the failure is caused by deficient state signaling.

Reuse leverage matters enormously. A sophisticated answer used once may justify
little expense. A sophisticated procedure executed ten million times may justify
substantial reasoning.

### 8.3 Cognitive roles by stage

The executor / supervisor / planner / compiler / auditor / architect roster of
earlier drafts maps onto the seven stages rather than replacing them:

```text
ARCHITECT    frontier            improves ontology, skills, guards, tests, architecture   (Formalization / Cognification, evolutionary)
PLANNER      high capability     turns novel contracts into mechanism designs             (Cognification)
COMPILER     capability + tools  translates designs into explicit executable structure    (Codification / Compilation)
SUPERVISOR   daily-driver        maintains task state, dependencies, completion           (Computation, task-level)
EXECUTOR     daily-driver        bounded transformations inside a defined procedure       (Computation, turn-level)
AUDITOR      independent         compares intent, trace, evidence, and outcome            (all strata, read-only)
```

A procedure produced by a high-capability model for a weaker executor must
minimize implicit inference:

```js
const ProcedureStandard = {
  inputs: [], preconditions: [], exactCapabilities: [], argumentSchemas: {},
  graph: { nodes: {}, edges: {} }, expectedEvidence: [], postconditions: [],
  failureStates: [], retryPolicy: {}, escalationPolicy: {}, completionCriteria: []
};
```

> The weaker the intended executor, the stronger the required specification.

### 8.4 Crystallization

The factory continuously turns reasoning into machinery:

```text
uncertain intention → reasoning → explicit concept → procedure → validated procedure
                    → skill → guard → code → deterministic infrastructure
```

Under the seven-stage model, **cognitive crystallization** is the progressive
reduction of flexible semantic understanding into a governed semantic contract,
a satisfying mechanism, and increasingly constrained material representations
until behavior becomes deterministic executable machinery.

```text
CONCEPTION          "I wish this could happen."
CONCEPTUALIZATION   "This is approximately what I mean."
FORMALIZATION       "This is precisely what it means and what must remain true."
COGNIFICATION       "This mechanism can satisfy that meaning."
CODIFICATION        "This is its implementation."
COMPILATION         "This is executable machinery."
COMPUTATION         "This machinery now performs the work."
```

Once a class of intention has been reduced enough times, the reasoning
disappears from runtime. "Whenever Mom emails about an appointment, put it on my
calendar" costs frontier reasoning once: ontology mapping, procedure synthesis, a
tested deterministic workflow. Every later occurrence is `incoming email →
compiled workflow → calendar event`. Expensive cognition has become crystallized
cognition.

### 8.5 Guards as compiled experience

A repeated failure should eventually cease to require model judgment:

```text
MODEL FAILS → AUDITOR IDENTIFIES PATTERN → PATTERN BECOMES TEST → TEST BECOMES GUARD → GUARD BECOMES INFRASTRUCTURE
```

Guards mature conservatively: observe → detect → warn → repair → block →
structural invariant.

This is the central economic principle. Every time a frontier model turns a
fuzzy reasoning problem into a deterministic guard, intelligence has been
compiled into software, which is far more valuable than solving the same
reasoning problem repeatedly.

---

## 9. The Stratified Intermediate Representation

The seven stages make the role of an intermediate representation clear.
WantwareIR is one versioned graph envelope with four explicitly owned strata:

```text
┌──────────────────────────────────────────────────────┐
│                     WANTWARE IR                      │
│                                                      │
│  SOURCE           conception + conceptualization     │
│        ↕ typed handoff                               │
│  SEMANTIC         versioned semantic contract        │
│        ↕ typed handoff                               │
│  COGNITIVE        versioned mechanism design         │
│        ↕ typed handoff                               │
│  MATERIALIZATION  bindings + artifact manifests      │
└──────────────────────────────────────────────────────┘
```

Here *source* means the source of intent, not source code. Each downstream
stratum binds the exact version and content hash of its upstream input. Each
graph element carries its own lifecycle. Readiness is assessed per handoff, and
incomplete representations are valid artifacts.

Because the semantic and cognitive strata are implementation-independent, one
confirmed snapshot can be codified into several ecosystems:

```text
                         ┌→ TypeScript / Bun
                         ├→ Rust
WantwareIR → CODIFIER ───┼→ Python
                         ├→ SQL + Workers
                         └→ WASM
```

[WantwareIR.md](./WantwareIR.md) is the full specification.

---

## 10. Doctrine

1. Begin with desired reality, not implementation.
2. Preserve the source. Record the want verbatim and the reading of it separately.
3. Give meaning a custodian. Formalize before designing; the Formalizer may not choose mechanism.
4. Treat the ontology and the semantic contract as the type system of agency.
5. Design within the contract. The Cognifier may not change meaning; the Codifier may not invent design.
6. Bind exactly. Every downstream artifact names the version and hash it interprets.
7. Reuse existing procedures before synthesizing new ones.
8. Use strong cognition to create reusable structures; use the cheapest capable cognition for bounded execution.
9. Externalize state, progress, and completion. The harness remembers; the model does not.
10. Represent absence and uncertainty explicitly. Keep what is known separate from how observation went.
11. Treat environmental evidence as authoritative. Transport success is not semantic success.
12. Argue success as claim, warrant, and evidence. Never let an executor certify its own success where independence is required.
13. Separate procedure from success. The procedure may be wrong; the criteria judge.
14. Audit trajectories independently. Findings return to the role authorized to change that stratum.
15. Locate failures at the lowest layer that explains them.
16. Turn repeated failures into tests, tests into guards, and stable procedures into code. Move solved cognition out of inference.
17. Let readiness, not enthusiasm, license each transition. An incomplete representation is a valid artifact, not a license to build.
18. Stabilize candidates, not authority. Integration may prove that code coheres; only the applicable evidence and independent judgment establish that it achieved the want.
19. Carry the speech act sequence through every handoff: Expressive → Assertive → Declarative → Commissive → committer-authored Directive → executable Imperative → evidence against the original Want. Keep ratification, authorization, and delivery commitment distinct.

The shortest formulation:

```text
Cheap cognition executes.
Structured state remembers.
The harness constrains.
Evidence decides.
Strong cognition designs.
Independent cognition audits.
Failure teaches the system.
```

---

## 11. Maxim

```text
CONCEIVE ↔ CONCEPTUALIZE ↔ FORMALIZE ↔ COGNIFY ↔ CODIFY ↔ COMPILE ↔ COMPUTE

WANT ↔ INTEND ↔ DEFINE ↔ DEVISE ↔ WRITE ↔ BUILD ↔ RUN
```

> **Conception supplies want.**
> **Conceptualization gives want intent.**
> **Formalization gives intent precise, governed meaning.**
> **Cognification gives formal meaning a satisfying mechanism.**
> **Codification gives mechanism source representation.**
> **Compilation gives implementation executable form.**
> **Computation gives executable form consequence.**
> **Observation gives consequence evidence.**
> **Reflection carries evidence back toward meaning.**

The system is a bidirectional factory operating between two pairs of poles:
**meaning ↔ mechanism** and **want ↔ reality**.

---

## Appendix A — A candidate intent definition language (non-normative)

The semantic stratum may eventually deserve a small surface syntax, on the order
of ten to fifteen constructs:

```text
THING · MEANS · IS-A · HAS · CAN · MUST · WHEN · WANT · FROM · TO · ONLY-IF · ENSURE
```

together with a small cognitive-design schema and the typed handoffs between
them. This is recorded as a hypothesis. The Agency plan (D-13) requires the
expression language to be derived from three deliberately different encodings,
not designed in advance, because the first encoding is always the case that fits.
Until those encodings exist, the IR accepts both human-readable and structured
expressions (see `WantwareIR.md` §15).

## Appendix B — Lineage

| Version | Stages | What it got right | What it conflated |
|---|---|---|---|
| Precursor (`agenticCognition.md`) | Intention → Declaration → Imperative | Four truth modes; evidence before belief; typed unknowns; completion as state; convert intelligence into infrastructure | Ontology, procedure, and evidence in one declarative layer; one `Agent = {reduce, synthesize, execute, verify, learn}` doing all five |
| Four-stage factory | Cognification → Codification → Compilation → Computation | The factory frame; cognitive roles; routing by leverage; crystallization; the reverse path; the first WantwareIR sketch | "Codification" meant procedure design, not source; meaning and mechanism shared one author |
| Formalizer / Cognifier | — | Meaning and mechanism are distinct epistemic authorities; three typed boundaries; Formalizer owns the whole semantic contract | — |
| Seven-stage model (this document) | Conception ↔ Conceptualization ↔ Formalization ↔ Cognification ↔ Codification ↔ Compilation ↔ Computation | One term per concept; per-element advancement; six truth modes; satisfaction cases and warrants; two epistemic axes; typed returns | — |

Names retired by this version: "declaration" as a stage, "codification" as
procedure design, `RefinementLevel` as a single scalar, and the four-mode truth
table. The Agency's existing role named `codifier` is a Productizer and is
renamed in the Agency plan; the Wantware Codifier is a different function.

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
