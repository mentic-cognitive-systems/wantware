# WantWare Development Process

**Working title:** WantWare Development Process  
**Context:** MENTIC / AXIS / CHMM / Ontologically Directed Agency  
**Status:** Draft synthesis

---

## 1. Purpose

WantWare is the development discipline for turning a human want into a working, adaptive application or system.

It sits between raw desire and executable software:

```txt
Want -> Ontologically Directed Agency -> AXIS Architecture -> Agentic Wheels -> Agentic Vehicle -> Wantware Destination
```

The process does not assume that users begin with requirements, screens, schemas, or workflows. Users begin with wants. The work of WantWare is to preserve the original want, interpret it into intent, discover the ontology implied by that intent, constrain the domain, compose action, build the vehicle, and use feedback to revise the system’s understanding.

WantWare therefore has two simultaneous shapes:

1. **A translation ladder** that moves from vague want toward executable behavior.
2. **A cybernetic spiral** that loops feedback back into wants, ontology, constraints, workflows, and architecture.

It is linear enough to build with, but recursive enough to learn with.

---

## 2. Core Stack

### 2.1 Wantware Destination

The destination is the user’s intended outcome.

The user does not fundamentally want software; the user wants to arrive somewhere: a decision made, a workflow completed, a system understood, a report generated, a customer served, a risk reduced, or a business process handled.

A Wantware destination map records:

- the raw want
- the desired outcome
- the actor or beneficiary
- the current friction
- the implied destination state
- the evidence that arrival has occurred
- the constraints that define acceptable arrival

### 2.2 Ontologically Directed Agency

Ontologically Directed Agency, or ODA, is the orienting model.

ODA says that intelligent action begins by classifying reality into meaningful objects, relationships, states, constraints, and possible actions. 
Once the system knows what kind of situation it is in, it can select or compose the appropriate workflows, tools, and interfaces.

ODA answers:

```txt
What exists?
What does it mean?
What state is it in?
What matters?
What can be done?
What should be done next?
What should be remembered?
```

ODA is the map-making and decision-orienting layer. It does not replace architecture. It directs architecture.

### 2.3 AXIS

AXIS is the architectural substrate.

It separates system concerns into Essence and Expression:

| Concern | Essence | Expression |
|---|---|---|
| Being | Form | Instance |
| Identity | Identity | Token |
| Meaning | Facet | Intent |
| Relating | Bond | Link |
| Doing | Action | Manager |
| Changing | Effect | Impact |
| Bridging | Wrapper | Adapter |

AXIS supplies the stable containers for the discoveries made by ODA.

- Forms define valid state shapes.
- Instances hold live state.
- Identities name durable things.
- Tokens project identity into scope and time.
- Facets expose capability surfaces.
- Intents normalize meaning.
- Bonds define relationship topology.
- Links resolve relationships at runtime.
- Actions perform pure state transformations.
- Managers route, coordinate, validate, and commit.
- Effects declare side effects.
- Impact executes side effects.
- Wrappers host surfaces.
- Adapters normalize edge input.

### 2.4 Agentic Wheels

Agentic Wheels are capability amplifiers that agents use to move through problem terrain.

They may include:

- knowledge graphs
- dynamic object models
- simulations
- planners
- constraint solvers
- generated tools
- workflow engines
- UI generators
- schema generators
- test/scenario generators
- summarizers and memory consolidators

A wheel is not the whole application. It is a reusable or generated cognitive artifact that lets the agent transfer effort across time, preserve structure, simulate futures, and avoid repeatedly reconstructing understanding from raw language.

### 2.5 Agentic Vehicles

An Agentic Vehicle is the composed application, workflow, or system that carries a user from want to destination.

It may be a traditional application, a dynamic tool, an internal system, a workflow surface, a generated UI, a knowledge dashboard, a background agent process, or an adaptive combination of these.

The vehicle is assembled from:

- AXIS components
- Agentic Wheels
- domain-specific best-practice structures
- UI surfaces
- persistence layers
- workflows
- policies
- tests
- feedback channels

Not every vehicle should be recomposed from scratch. Mature application domains contain hard-won patterns that should be preserved as static or semi-static structures. Dynamic composability should occur where context matters, not where best practice is already stable.

### 2.6 CHMM

The Cybernetic-Hermeneutic Meta-Model, or CHMM, is the feedback and traversal engine.

CHMM treats development as a spiral through uncertainty:

```txt
Breach -> Resonate -> Constrain -> Crystallize -> Actualize -> Re-enter
```

It detects resonance between intended meaning and materialized reality. When the running system does not fit the user’s want, the domain constraints, or observed behavior, CHMM treats the mismatch as a signal rather than merely an error.

The result is not just debugging. It is reinterpretation.

---

## 3. The Non-Linear Shape

The WantWare process should not be modeled as a single waterfall:

```txt
Want -> Spec -> Code -> Done
```

That hides interpretation inside implementation.

A better shape is:

```txt
                 ┌───────────────────────────────┐
                 │                               │
                 ▼                               │
Want -> Intent -> Ontology -> Constraints -> AXIS Components
                 │                               │
                 ▼                               │
          Agentic Wheels -> Agentic Vehicle -> Runtime Feedback
                 │                               │
                 └──────────── CHMM Loop ────────┘
```

The system can loop at multiple levels:

| Feedback signal | Likely loop target |
|---|---|
| User says “that is not what I meant” | Want / Intent |
| Missing object or relationship appears | Ontology / Form / Bond |
| Rule violation appears | Constraint / Invariant |
| Workflow feels wrong | Facet / Manager / Action |
| Side effect fails | Effect / Impact |
| UI hides important state | Wrapper / Facet / Adapter |
| Pattern repeats often | Agentic Wheel or static application structure |
| Daily activity changes tomorrow’s priorities | Day State / Memory / Destination Map |

So the process has a default forward direction, but feedback can re-enter at the correct conceptual layer.

### 3.1 The Speech Act Flow

The speech act flow makes the translation from want to realized outcome explicit:

```txt
Expressives -> Assertives -> Declaratives -> Commissives -> Directives -> Imperatives
     ^                                                                          |
     └──────────── Verified realization / feedback against the Want ─────────────┘
```

Each step carries the meaning and obligations of the preceding steps forward:

| Speech act | Role in WantWare | Result carried forward |
|---|---|---|
| **Expressives** | Communicate a Want: what someone wants and why it matters. | The original Want, beneficiary, and intended destination. |
| **Assertives** | Establish what is known about the current state of reality and the wanted state, separating evidence from assumptions and uncertainty. | An evidenced account of where things are, where they should be, and the distance between them. |
| **Declaratives** | Specify what would need to be true to bridge the distance between wanted and realized. | Required states, constraints, and acceptance conditions that define fulfillment. |
| **Commissives** | Commit an actor to delivering on the Declaratives. | An accountable committer, delivery scope, and the conditions under which the commitment can be fulfilled. |
| **Directives** | The committer writes instructions for the work that would make the Declaratives true. | Assigned work, procedures, dependencies, and completion criteria. |
| **Imperatives** | Turn the Directives into the concrete executable steps required to fulfill them. | Operations, state transitions, and effects whose results can be checked. |

Declaratives describe what must become true. Directives specify the work to make it true. Imperatives carry that work into execution. A Commissive connects the desired state to an actor responsible for delivering it; writing instructions alone does not establish that commitment.

For example:

```txt
Expressive:  "I want a reliable daily operational digest."
Assertives:  "Updates are spread across three systems; the wanted state is one
              accurate digest available to the team by 9 a.m. each workday."
Declarative: "The digest must cover all three systems, identify its sources,
              flag missing data, and be available by 9 a.m."
Commissive:  "I commit to delivering that digest under these conditions."
Directive:   "Collect the updates, reconcile them, validate the digest against
              the acceptance conditions, and publish it to the team."
Imperatives: "Fetch each source; normalize records; generate the summary;
              check coverage and source references; publish; record the result."
```

This flow runs through the development phases rather than replacing them. Phases 1–2 preserve the Expressive and interpret the Want. Phases 2–3 establish the Assertives about reality and the wanted state. Phase 4 crystallizes the Declaratives. Before directing implementation, the responsible actor makes the Commissive explicit. Phase 5 records that committer's Directives, and Phases 6–9 compose the Imperatives into executable AXIS behavior. Phases 10–12 verify the realized state against the Declaratives and the original Expressive, then route any mismatch back into the spiral.

The intended result is a deterministic process that can contain probabilistic parts while delivering what the Expressives originally wanted. Determinism belongs to the process contracts: explicit inputs, state, obligations, validation rules, and defined branches for success, failure, and re-entry. A probabilistic classifier, planner, or generator may propose different outputs, but its outputs must pass the relevant checks before the process accepts them. Failed checks trigger defined revision, retry, or escalation paths; they do not count as fulfillment.

Completion therefore requires evidence that the Imperatives fulfilled the Directives, the Directives delivered the committed Declaratives, and the realized state satisfies the original Want. When evidence or external conditions prevent fulfillment, the process records the unmet commitment and re-enters the appropriate phase. It must not silently redefine the Want to match what happened to be produced.

---

## 4. Development Phases

## Phase 1 — Preserve the Want

**Goal:** Preserve the Expressive Want in the user’s words without prematurely turning it into features.

Ask:

- What does the user want?
- What friction created the want?
- What destination would satisfy the want?
- What evidence would show that the user arrived?
- What must not be lost in translation?

Produce:

- Raw Want Record
- Destination Statement
- Friction Notes
- Arrival Evidence

Template:

```md
## Raw Want

## Desired Destination

## Source / Original Expression

## Current Friction

## Actor / Beneficiary

## Arrival Evidence

## Non-Negotiables
```

---

## Phase 2 — Interpret Intent

**Goal:** Convert raw want into candidate meanings and an Assertive account of current and wanted states without pretending certainty.

Ask:

- What action is implied?
- What object is being acted on?
- What outcome counts as progress?
- What remains ambiguous?
- What assumptions are being made?
- What evidence supports the current-state account and the interpretation of the wanted state?

Produce:

- Intent Candidates
- Assumption List
- Open Questions
- Confidence Notes
- Current / Wanted State Account with Source Evidence

Evidence of what the user expressed or confirmed supports the interpretation of the wanted state; it does not show that the wanted outcome already exists. Keep observations, assumptions, and unknowns distinguishable.

Example:

```json
{
  "intent": "workflow.generate_from_goal",
  "actor": "business_user",
  "desiredOutcome": "automated daily operational digest",
  "uncertainty": ["source systems", "summary policy", "approval workflow"]
}
```

AXIS mapping:

- candidate Intent
- possible Token scope
- initial Wrapper context

CHMM role:

- Epistemological Breach
- hypothesis generation

---

## Phase 3 — Discover the Ontology

**Goal:** Identify the things, relationships, states, and capabilities implied by the want, grounding the Assertive account in domain reality.

Ask:

- What entities exist?
- Which entities require stable identity?
- What state must be remembered?
- What relationships matter?
- What lifecycle states exist?
- What capabilities should be available in each state?
- What taxonomies classify the domain?

Produce:

- Entity List
- Candidate Forms
- Candidate Identities
- Candidate Bonds
- Candidate Facets
- Classification Taxonomies
- State Lifecycle Notes
- Evidenced Current / Wanted State Gap and Remaining Unknowns

ODA output:

```txt
Classified domain reality
```

AXIS mapping:

- Forms
- Identities
- Bonds
- Facets

Agentic Wheel candidates:

- taxonomy classifier
- knowledge graph builder
- schema generator
- relationship mapper

---

## Phase 4 — Constrain the Domain

**Goal:** State the Declaratives: required truths, constraints, and acceptance conditions that would bridge the current/wanted gap.

These declarations define the intended state; they do not assert that reality already satisfies it. Fulfillment requires later observations evaluated against the evidence requirements.

Ask:

- What must always be true?
- What must never happen?
- What policies govern behavior?
- What permissions are required?
- What business rules determine valid action?
- What makes output acceptable?
- What invalidates the current interpretation?

Produce:

- Form Invariants
- Bond Invariants
- Facet Policies
- Token Policies
- Manager Commit Rules
- Acceptance Conditions
- Required Truths Traced to the Original Want
- Evidence Requirements for Each Required Truth
- Scenario Tests

AXIS mapping:

- Form invariants
- Bond invariants
- Facet policy surfaces
- Manager commit validation
- Token claims and scope

CHMM role:

- Constraint Resolution
- semantic friction detection

---

## Phase 5 — Define the Workflows

**Goal:** Record the accountable Commissive, then have that committer author the Directives that organize delivery of the Declaratives.

Before issuing work, record who commits to which required truths, the delivery scope, dependencies, and conditions. Feasibility exploration can precede commitment; a proposed workflow becomes a Directive only when authored and issued by the committer under that commitment. Confirmation of meaning and permission to execute remain separate from the promise to deliver.

Ask:

- Who commits to delivering the required truths, under what conditions?
- Which instructions does that committer issue, and who performs them?
- What starts the flow?
- What state is read?
- What is classified?
- What decision is made?
- What state changes?
- What effects are declared?
- What should become visible to the user?
- What happens when the flow fails?

Produce:

- Delivery Commitment Record
- Committer-Authored Directives with Assignments and Completion Criteria
- Use-Case Procedures
- Workflow Maps
- Failure Branches
- Human Review Points
- Automation Boundaries

Canonical flow:

```txt
Wrapper -> Adapter -> Intent -> Manager -> Facet -> Action -> Effect -> Impact -> Instance -> Wrapper
```

This is the point where domain best practice matters. If a domain has a known best-practice workflow, preserve it as a reusable static or semi-static structure. Do not force the agent to rediscover accounting, onboarding, reconciliation, scheduling, or compliance workflows every time.

---

## Phase 6 — Split into Logical Legos

**Goal:** Refine the issued Directives into executable Imperatives, separating small pure state transitions from declared effects so they can be tested and recomposed.

Ask:

- What is the smallest pure state transition?
- What state snapshot does it need?
- What Intent does it accept?
- What delta does it produce?
- What Effects does it declare?
- What invariant must the Manager validate afterward?

Produce:

- Action Contracts
- Delta Shapes
- Effect Declarations
- Unit Test Scenarios
- Directive-to-Operation Trace and Result Checks

Example:

```txt
classifyInput(state, intent) -> { delta, effects[] }
generateHypotheses(state, intent) -> { delta, effects[] }
selectWorkflow(state, intent) -> { delta, effects[] }
composeVehicle(state, intent) -> { delta, effects[] }
recordFeedback(state, intent) -> { delta, effects[] }
```

AXIS mapping:

- Actions
- Effects
- Manager commit path

Agentic Wheel candidates:

- pure function generator
- test generator
- effect schema generator

---

## Phase 7 — Compose Capability Surfaces

**Goal:** Package logical legos into contextually relevant capability sets.

Ask:

- Which Actions belong together?
- Which capabilities are available for which actor, role, state, or phase?
- Which Facets represent stable domain surfaces?
- Which capabilities should be generated dynamically?
- Which Wrappers host interaction?
- Which Adapters normalize input?

Produce:

- Facet Maps
- Wrapper Boundaries
- Adapter Contracts
- Manager Boundary Contract
- Impact Handler List
- Capability Registry

Example Facets:

```txt
WantFacet:
- captureWant
- refineWant
- mapDestination

OntologyFacet:
- classifyEntity
- proposeForm
- proposeBond
- proposeFacet

VehicleFacet:
- composeUI
- composeWorkflow
- composePersistence
- composeTests

FeedbackFacet:
- recordResonance
- summarizeDayState
- proposeRevision
```

AXIS mapping:

- Facets group Action delegates.
- Wrappers host interaction surfaces.
- Adapters normalize input.
- Managers route, commit, and coordinate.
- Impact executes Effects.

---

## Phase 8 — Build or Select Agentic Wheels

**Goal:** Identify the cognitive artifacts needed to help agents move through the terrain.

Ask:

- Does the agent need a knowledge graph?
- Does the agent need a simulator?
- Does the agent need a planner?
- Does the agent need a UI composer?
- Does the agent need a schema or ontology generator?
- Does the agent need a constraint solver?
- Does the agent need a memory summarizer?
- Is this wheel reusable across vehicles?

Produce:

- Wheel Inventory
- Wheel Contracts
- Wheel Inputs and Outputs
- Wheel Persistence Rules
- Wheel Evaluation Tests

Example wheel contract:

```md
## Wheel: Domain Ontology Builder

Directive / Required truths served:
Purpose:
Inputs:
Outputs:
State it reads:
State it writes:
AXIS components produced:
Evaluation criteria:
Validation of probabilistic outputs:
Failure modes / Retry, revision, or escalation paths:
```

Agentic Wheels are promoted when repeated patterns appear. If the same reasoning artifact is regenerated several times, it should become a reusable wheel.

---

## Phase 9 — Compose the Agentic Vehicle

**Goal:** Assemble the application, workflow, or system that carries the user to the destination.

Ask:

- What is the vehicle’s boundary?
- What state does it own?
- What Intents does it accept?
- What Facets does it expose?
- What Wheels does it use?
- What UI surfaces clarify state?
- What workflows move the user forward?
- What side effects does it execute?
- What feedback does it collect?

Produce:

- Running Application
- Vehicle Manifest
- AXIS Component Map
- UI Surface Map
- Workflow Map
- Test Suite
- Telemetry Plan

Vehicle manifest:

```md
# Agentic Vehicle Manifest

## Destination Served / Original Want

## Assertive Current / Wanted State Account

## Declarative Required Truths / Evidence Requirements

## Accountable Commitment / Delivery Conditions

## Committer-Authored Directives / Executable Imperatives

## Owned State

## Accepted Intents

## Forms / Instances

## Identities / Tokens

## Facets / Actions

## Bonds / Links

## Effects / Impacts

## Wrappers / Adapters

## Agentic Wheels Used

## User Surfaces

## Scenario Tests

## Feedback Channels
```

---

## Phase 10 — Run Scenarios

**Goal:** Verify that executed Imperatives fulfill the issued Directives and committed Declaratives, with evidence that the realized state satisfies the original Want.

Ask:

- Can the user perform the workflow?
- Does each scenario trace through operations, issued instructions, commitment, and required truths back to the original Want?
- What evidence establishes fulfillment, and which conditions remain unmet?
- Does each Intent route to the right Facet and Action?
- Are Effects declared rather than executed inside Actions?
- Does Impact execute the intended IO?
- Does the Manager own state changes and validate invariants?
- Does the UI surface meaningful state?
- What friction appeared?

Produce:

- Scenario Traces
- Behavior Tests
- Effect Outcomes
- Resonance Records
- Revision Candidates

Scenario trace template:

```md
# Scenario Trace

## Scenario

## Original Want

## Speech Act Trace

Expressive / Assertives / Declaratives / Commissive / Directives / Imperatives

## Intent Path

## State Before

## Action(s)

## Delta(s)

## Effects

## Impact Outcomes

## State After

## User-Visible Result

## Fulfillment Evidence Against Required Truths and Original Want

## Unmet Commitments / Re-entry Decision

## Resonance / Friction

## Revision Candidate
```

---

## Phase 11 — Collect Runtime Feedback

**Goal:** Turn real-world use into structured learning.

Feedback channels include:

- invariant violations
- failed effects
- user corrections
- abandoned workflows
- repeated manual adjustments
- low-confidence classifications
- unexpected domain objects
- performance divergence
- missing UI state
- repeated support questions
- daily operational summaries

Produce:

- Resonance Records
- Fulfillment Evidence / Unmet Commitments
- Day State
- Revision Intents
- Ontology Extension Candidates
- Workflow Improvement Candidates
- Wheel Promotion Candidates

Day State template:

```md
# Day State

## Date

## Intents Processed

## State Changes

## Effects Executed

## Required Truths Verified / Evidence / Unmet Commitments

## User Corrections

## Resonance Signals

## New Objects / Relationships

## Workflow Frictions

## Suggested Revisions

## Tomorrow’s Course
```

The Day State is important because it gives the system continuity. It summarizes what changed, what was learned, what failed, and what should shape the next day’s operation.

---

## Phase 12 — Re-Enter the Spiral

**Goal:** Convert feedback into the next cycle of development, recording unmet commitments and revisiting the earliest affected speech act.

A changed Want or required truth needs explicit confirmation from its source and review of affected commitments and Directives before work continues. Record revisions rather than silently treating the latest output as the original destination.

Ask:

- Did the feedback revise the want?
- Did it reveal a missing entity?
- Did it reveal a missing relationship?
- Did it reveal a weak invariant?
- Did it reveal an inadequate workflow?
- Did it reveal a missing capability?
- Did it reveal a repeated pattern that should become a Wheel?
- Did it reveal a stable pattern that should become part of the Vehicle?

Produce:

- Revised Want
- New Intent Candidates
- Ontology Delta
- Constraint Delta
- Workflow Delta
- Component Delta
- Wheel Delta
- Vehicle Delta

Re-entry routing:

| Signal | Re-enter at |
|---|---|
| Wrong goal | Phase 1 — Preserve the Want |
| Wrong interpretation | Phase 2 — Interpret Intent |
| Missing concept | Phase 3 — Discover the Ontology |
| Invalid behavior or inadequate required truths | Phase 4 — Constrain the Domain |
| Unmet commitment or invalid delivery conditions | Phase 5 — Define the Workflows, returning upstream if the required truths need revision |
| Awkward process | Phase 5 — Define the Workflows |
| Unclear logic | Phase 6 — Split into Logical Legos |
| Bad capability grouping | Phase 7 — Compose Capability Surfaces |
| Repeated reasoning burden | Phase 8 — Build or Select Agentic Wheels |
| Poor application fit | Phase 9 — Compose the Agentic Vehicle |
| Failed scenario | Phase 10 — Run Scenarios |
| Runtime mismatch | Phase 11 — Collect Runtime Feedback |

---

## 5. Process Summary

```txt
1. Preserve the Want (Expressive)
2. Interpret Intent (Assertive account begins)
3. Discover the Ontology (ground current / wanted states)
4. Constrain the Domain (Declarative required truths)
5. Define the Workflows (Commissive, then committer-authored Directives)
6. Split into Logical Legos (refine Directives into Imperatives)
7. Compose Capability Surfaces
8. Build or Select Agentic Wheels
9. Compose the Agentic Vehicle
10. Run Scenarios
11. Collect Runtime Feedback
12. Re-enter the Spiral
```

The forward path builds the vehicle.
The feedback path improves the map, the vehicle, the wheels, and the destination.

The speech act flow preserves meaning and accountability across that path:

```txt
Expressives communicate the Want
-> Assertives establish current and wanted states
-> Declaratives specify what must become true
-> Commissives commit to delivery
-> The committer writes Directives
-> Imperatives execute the required steps
-> Evidence verifies fulfillment of the original Want
```

---

## 6. Minimal WantWare Brief

Use this when starting a new WantWare project.

```md
# WantWare Brief

## 1. Raw Want

## 2. Desired Destination

## 3. Actor / Beneficiary

## 4. Current Friction

## 5. Arrival Evidence

## 6. Intent Candidates

## 7. Assumptions

## 8. Things That Must Exist

## 9. State Shapes / Forms

## 10. Stable Identities

## 11. Relationships / Bonds

## 12. Capabilities / Facets

## 13. Constraints / Invariants

## 14. Policies / Token Rules

## 15. Workflow Procedure

## 16. Actions

## 17. Effects

## 18. Impact Handlers

## 19. Manager Boundary

## 20. Wrappers / Adapters

## 21. Agentic Wheels

## 22. Vehicle Manifest

## 23. Scenario Tests

## 24. Feedback Channels

## 25. Day State Summary

## 26. Re-entry Rules

## 27. Speech Act Trace

Expressive (original Want):
Assertives (current and wanted states, evidence, uncertainty):
Declaratives (required truths and acceptance conditions):
Commissive (committer, delivery scope, conditions):
Directives (work written by the committer):
Imperatives (executable steps):
Fulfillment Evidence (realized state checked against the original Want):
```

---

## 7. Manager Boundary Contract

Every actualized vehicle should declare its Manager boundary.

```md
# Manager Boundary Contract

## Boundary Name

## Owned State

## Accepted Intents

## Available Facets

## Action Delegates

## Commit Invariants

## Bonds Validated

## Links Resolved

## Tokens Issued / Revoked

## Effects Emitted

## Impact Handlers Called

## Returned Outcomes

## Feedback Emitted

## Out-of-Bounds Responsibilities
```

A Manager commit validates and persists a state transition. It does not establish the actor’s Commissive delivery promise, source ratification of meaning, or authorization to execute. Keep those records distinct and trace Manager operations back to the issued Directives they serve.

The Manager should not become a god object. If it coordinates unrelated domains, split the boundary. If it accumulates too much workflow logic, introduce workflow sub-components. If it accumulates too much routing detail, decompose Facets.

---

## 8. The Practical Rule

Do not jump from want to code.

Jumping from want to code hides interpretation inside implementation. WantWare keeps interpretation visible long enough to test it, trace it, and revise it.

The minimum viable chain is:

```txt
Expressive Want
-> Assertive current / wanted state account (Intent + Ontology + evidence / uncertainty)
-> Declarative required truths (Constraints + acceptance conditions)
-> Commissive delivery commitment
-> Committer-authored Directives (Procedures)
-> Executable Imperatives (Actions + Effects + Code)
-> Scenario / runtime evidence against required truths and original Want
-> Feedback / defined re-entry
```

The full agentic chain is:

```txt
Wantware Destination
-> Ontologically Directed Agency
-> AXIS Component Model
-> Agentic Wheels
-> Agentic Vehicle
-> Scenario Execution
-> Runtime Feedback
-> CHMM Re-entry
-> Revised Destination / Ontology / Vehicle
```

---

## 9. Naming Notes

- **Wantware** names the user-facing paradigm: systems organized around expressed wants and desired outcomes.
- **WantWare Development Process** names the method for turning wants into working systems.
- **Ontologically Directed Agency** names the orienting intelligence pattern: classify reality, then act from that classification.
- **AXIS** names the architectural grammar.
- **CHMM** names the cybernetic feedback and reinterpretation spiral.
- **Agentic Wheels** name the cognitive artifacts that amplify agent capability.
- **Agentic Vehicles** name the composed applications or systems that carry users toward destinations.
- **Wantware Destination Maps** name the persistent maps of wants, outcomes, constraints, and arrival evidence.

---

## 10. One-Sentence Definition

WantWare Development preserves an Expressive Want, establishes an evidenced Assertive account of current and wanted states through ODA, declares the truths required for fulfillment, records an accountable delivery commitment, turns that committer’s Directives into executable Imperatives through AXIS, Agentic Wheels, and an Agentic Vehicle, and uses evidence and CHMM re-entry to establish fulfillment or explicitly address unmet obligations.

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
