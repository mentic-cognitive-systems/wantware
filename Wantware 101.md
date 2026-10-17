# Wantware 101

Wantware is the procedural discipline for turning a written want into an actualized application.

Old computing:
  behavior = code

New computing:
  behavior = inference(policy, goals, context, tools)

The “application” is no longer the thing, the derivation process is the thing.

Legos imply pre-defined pieces assembled into a fixed structure.
Agents don’t just assemble — they decide what structure should exist at all.

So this isn’t assembly; it’s instantiation.

A better analogy:
* software = a map
* agentic system = a navigator

You no longer install the route; you state the destination.

Vaporware historically meant: something promised but not implemented.
Agentic systems are: something implemented but not pre-materialized.

The behavior literally does not exist until needed.
So the artifact is not stored — only the capability is stored.

That means the system is neither:
* compiled
* nor interpreted

It is continuously realized.

This is closer to physics than programming:
a wavefunction vs a particle.

runtime-generated, goal-directed behavior.

Realization derived from intent when needed.
The system exists in potential until activated by intent.
Intent interpreter; // component responsible for translating high-level intent into actionable system behavior
Capability manager; // component responsible for managing and invoking the system's capabilities based on interpreted intent
Scenario executor; // component responsible for executing scenario behaviors using the available capabilities
Feedback handler; // component responsible for collecting and processing feedback to refine the system's behavior and inform future intent interpretation and capability management

Human → Expressives → Assertives → Declaratives → Commissives → Directives → Imperatives → verified realization

The Want is expressed first. Evidence establishes the current and wanted states; declarations specify the truths needed to bridge their distance. An accountable actor commits to those declarations, writes the Directives, and carries them into executable Imperatives. Feedback checks the resulting reality against the original Want.

infer state constraints and generate declarative truth conditions.
We did not create actions.
We created conditions that must be true.

Intent Interpretation Engine → produces a candidate Desired World Model and an evidenced account of current reality, keeping assumptions and uncertainty explicit.
Capability Management Engine → supports an accountable actor in committing to required truths and writing Directives using available capabilities.
Scenario Execution Engine → executes the Imperatives that fulfill those Directives using the available capabilities.
Feedback Processing Engine → collects and processes feedback to refine the system's behavior and inform future intent interpretation and capability management. 

```json
Intention {
  name: "Email → Knowledge"
  primary_goal: "Extract durable information"
  secondary_goals: ["Reduce inbox load", "Preserve receipts/bills", "Learn marketing patterns", "Enable future analysis"]
  constraints: ["Don’t lose important personal threads", "Minimize manual review", "Support 4 accounts", "Privacy-first"]
  success_signals: [
    "High-value facts captured",
    "Search/graph works",
    "Inbox volume falling",
    "Ongoing ingestion works"
  ]
}
```

---------------------

AXIS gives the architecture for separating state, identity, meaning, logic, effects, and boundaries. CHMM gives the traversal pattern for moving through uncertainty. Wantware names the practical middle process: how a builder, agent, or biological mind moves from a vague desire to working behavior without skipping the reasoning steps that make the result coherent.

The core idea:

```txt
Want
-> Interpretive Intent and Evidenced State
-> Required Truths and Constraints: Declared Ontology & Constraints
-> Accountable Delivery Commitment
-> Committer-Written Directives
-> Executable Imperative Procedures
-> Pure Logic Units
-> Capability Components
-> Scenario Behaviors
-> Running Application
-> Feedback
-> Revised Want
```

Wantware is not a replacement for AXIS. It is the approach path into AXIS. It answers the question:

> How do we arrive at the logic before we codify the logic?

## The Problem

Architecture specs can prescribe where logic belongs once logic exists. They can say:

- put shape in Forms
- put mutable state in Instances
- put normalized meaning in Intents
- put pure transformations in Actions
- put side-effect descriptions in Effects
- put side-effect execution in Impact
- let Managers route, commit, and coordinate

But the harder problem often comes earlier.

The user does not begin with a clean Action signature, a Form invariant, or a Facet map. The user begins with want:

```txt
I need this to help me think.
I want the app to guide me from a vague idea into something buildable.
I want agents to understand what I meant and turn it into working behavior.
```

Wantware is the process for transforming that raw want into structured, testable, composable system logic.

## The Translation Ladder

Each rung of the ladder reduces ambiguity while preserving traceability back to the original want. The speech act sequence is the governing contract:

```txt
Expressives -> Assertives -> Declaratives -> Commissives -> Directives -> Imperatives
```

The ladder's implementation stages are not separate speech acts. Interpretation and state assessment establish Assertives; ontology and constraint work develop Declaratives; composition and execution implement Imperatives. Commitment and the committer's instructions must connect required truths to execution before implementation begins. See [The WantWare Development Process §3.1](The%20WantWare%20Development%20Process.md#31-the-speech-act-flow).

### 1. Written Wants

Capture raw human language without correcting it too early.

Example:

```txt
I want a tool that helps me turn vague ideas into working systems.
```

At this stage, the Expressive communicates the Want. Do not force premature structure. The goal is to preserve the original signal and beneficiary as the reference for eventual fulfillment.

Ask:

- What outcome is desired?
- Who or what benefits?
- What pain, absence, or friction caused the want?
- What would feel different if the want were satisfied?

Output:

```txt
Raw want record
```

AXIS relation: pre-Intent material.

### 2. Imprecise Intents and Evidenced States

Extract the implied meanings from the want.

Example:

```json
{
  "intent": "system.generate_from_goal",
  "actor": "builder",
  "desiredOutcome": "working application",
  "uncertainty": ["domain model", "logic structure", "implementation path"]
}
```

This is not yet a final AXIS Intent. It is an interpretive Intent candidate. It says what the system thinks the user may mean. Assertives then establish what is known about reality and the wanted state; an interpretation alone is not evidence.

```txt
Current state: The builder records ideas in notes; no working generation workflow exists.
Evidence: Reviewed workspace and builder's account of the current workflow.
Wanted state: The builder can turn an idea into a working, verified application.
Uncertainty: Supported domains, acceptance measures, and available capabilities need clarification.
```

Record the source of each claim, distinguish observations from assumptions, and clarify the wanted state with its beneficiary.

Ask:

- What action is implied?
- What object is being acted on?
- What outcome would count as progress?
- What remains uncertain?

Output:

```txt
Intent candidates
Current and wanted state claims with evidence
Assumptions, uncertainty, and gap assessment
```

AXIS relation: early Intent, still negotiable.

### 3. Declarative Descriptions

Describe what must exist, not how to do it.

Example:

```txt
To bridge the assessed gap, the system must represent projects, goals, hypotheses, constraints, decisions, generated artifacts, and feedback signals.
```

At this stage, the work becomes ontological. Declaratives specify required truths that bridge the assessed gap, including things that must be named, shaped, related, and remembered. Claims about what already exists remain Assertives; this stage describes what fulfillment requires.

Ask:

- What entities exist?
- Which entities need stable identity?
- What state must be held?
- What capabilities must be available?
- What relationships matter?

Output:

```txt
Candidate Forms
Candidate Identities
Candidate Facets
Relationship notes
```

AXIS relation:

- Forms define valid state shapes.
- Identities name stable things.
- Facets define capability surfaces.

### 4. Constraint Resolution

Turn descriptions into rules, invariants, and acceptance conditions.

Example:

```txt
A project must have one active goal.
A hypothesis may be abandoned, selected, or materialized.
An Action may declare Effects but may not execute IO.
Generated code must be traceable to the Intent and constraints that produced it.
```

This is where vague possibility becomes bounded possibility.

Ask:

- What must always be true?
- What must never happen?
- What decisions are policy decisions?
- What makes an output acceptable?
- What would invalidate the current interpretation?

Output:

```txt
Form invariants
Facet policies
Manager commit rules
Acceptance checks
```

AXIS relation:

- Form invariants constrain state.
- Facets constrain available capabilities.
- Managers validate commits.

### 5. Delivery Commitment and Directives

Before implementation, an accountable actor makes a Commissive binding delivery to the Declaratives, with explicit scope, conditions, and limits. This delivery commitment is distinct from an AXIS Manager committing a state delta.

```txt
Committer: Application builder agent.
Commitment: Deliver a goal-submission workflow that preserves the raw Want,
records interpretation and uncertainty, and produces traceable hypotheses.
Conditions: Workspace access and the declared capability set are available;
failed acceptance checks require revision or a recorded unmet commitment.
```

The committer then writes Directives: assigned work, dependencies, procedures, and completion criteria that will make the required truths hold.

```txt
Directive from the committer:
Implement and verify the goal-submission workflow. Preserve the raw Want,
record state evidence and assumptions, and ensure every generated hypothesis
traces back to its goal. Accept delivery only when the declared checks pass.
```

Derive concrete Imperatives from those Directives. For the runtime workflow:

Example:

```txt
When the user submits a goal:
1. Preserve the raw input and normalize it into a goal.declare Intent.
2. Route the Intent through the active workspace Facet.
3. Record current and wanted state claims, their evidence, and unresolved assumptions.
4. Produce hypothesis nodes linked to the goal and required truths.
5. Validate traceability and invariants; commit valid deltas to the workspace Instance.
6. Declare persistence and render Effects; execute through Impact and record outcomes.
7. Check outcomes against the Directive and acceptance conditions; route failures for revision.
```

The system now has instructions backed by an accountable commitment and concrete steps that implement them. A procedure need not yet be code, but every step must trace to a Directive and its required truth. The runtime `goal.declare` Intent name does not itself establish the development process’s Declaratives or delivery commitment.

Ask:

- What starts the flow?
- What gets normalized?
- What state is read?
- What decision is made?
- What state changes?
- What Effects are declared?
- What output becomes visible?

Output:

```txt
Accountable commitment with scope and conditions
Committer-written Directives and completion criteria
Imperative use-case procedure
Runtime flow
Failure branches
```

AXIS relation:

```txt
Wrapper -> Adapter -> Intent -> Manager -> Facet -> Action -> Effect -> Impact
```

### 6. Logical Legos

Implement the Directives through Imperatives, separating small pure transformations from effect execution.

Example:

```txt
declareGoal(state, intent) -> { delta, effects[] }
generateHypotheses(state, intent) -> { delta, effects[] }
selectHypothesis(state, intent) -> { delta, effects[] }
materializePath(state, intent) -> { delta, effects[] }
recordFeedback(state, intent) -> { delta, effects[] }
```

These are the first stable logic units. They should be small enough to test with a state snapshot and an Intent.

Ask:

- What is the smallest pure state transition?
- What data does it need?
- What delta does it produce?
- What Effects does it declare?
- What invariant must the Manager validate after the delta?

Output:

```txt
Action candidates
Delta shapes
Effect declarations
Unit test scenarios
```

AXIS relation: Actions as pure logic.

### 7. Composable Components

Package logical legos into capability surfaces and runtime boundaries.

Example:

```txt
GoalFacet:
- declareGoal
- refineGoal

HypothesisFacet:
- generateHypotheses
- compareHypotheses
- selectHypothesis

MaterializationFacet:
- emitSpec
- generateCode
- runVerification

FeedbackFacet:
- recordFeedback
- detectResonance
- proposeRevision
```

The system moves from individual transformations to composable capability sets.

Ask:

- Which Actions belong together?
- Which capabilities are available in this phase?
- Which Wrapper hosts the interaction?
- Which Adapter normalizes the input?
- Which Manager owns the state boundary?
- Which Impact handlers are required?

Output:

```txt
Facet maps
Wrapper boundaries
Adapter contracts
Manager boundary contract
Impact handler list
```

AXIS relation:

- Facets group capability delegates.
- Wrappers host interaction surfaces.
- Adapters normalize input.
- Managers route, commit, and coordinate.
- Impact executes Effects.

### 8. Begotten Behaviors

Run the components through scenarios and observe the behavior they produce.

Example:

```txt
Scenario:
User says, "Build an inventory system that survives split brain."

Expected behavior:
- create project identity
- preserve the original Want and infer the distributed-systems domain
- establish current deployment facts and the wanted consistency/availability state
- generate CRDT, consensus, and event-sourcing hypotheses; record uncertainty
- ask constraint questions and declare required truths with split-brain acceptance checks
- record an accountable delivery commitment and that committer’s Directives
- produce and execute an AXIS component draft implementing those Directives
- collect partition/recovery evidence and check it against the required truths and original Want
- record unresolved assumptions or unmet commitments and re-enter the appropriate step
```

This stage tests whether the logic actually begets the intended behavior. Scenario evidence checks that Imperatives fulfill Directives and committed Declaratives; the earlier state assessment already established the starting reality.

Ask:

- Does the scenario produce the expected state changes?
- Are the emitted Effects correct?
- Does the Manager reject invalid deltas?
- Does the behavior match the original want?
- What friction or mismatch appeared?

Output:

```txt
Scenario traces
Behavior tests
Resonance records
Revision candidates
```

AXIS relation:

- Instances change.
- Effects are declared.
- Impact executes.
- Feedback re-enters as new Intent.

### 9. Actualized Application

Materialize the verified behavior into code, UI, storage, tests, and feedback loops.

Example:

```txt
Working app:
- user-facing Wrapper
- event Adapters
- persisted Instances
- pure Actions
- Manager dispatch loop
- Facet capability maps
- Effect declarations
- Impact handlers
- tests for each Intent path
```

At this point, the system has crossed from described behavior into running behavior.

Ask:

- Can the user perform the workflow?
- Is each behavior traceable through Imperatives, Directives, commitment, and Declaratives to the original Want?
- Does observed reality satisfy the original Want and the declared acceptance conditions?
- Are side effects isolated in Impact?
- Are state changes owned by the Manager?
- Are tests aligned with the declared scenarios?

Output:

```txt
Actualized application
Executable tests
Traceable behavior map
Feedback loop
```

AXIS relation: full runtime chain.

## The Wantware Spiral

Wantware is not linear in practice. It spirals. These factory stages organize work; they do not replace the ordered speech act obligations within a turn of the spiral.

```txt
Breach
-> Resonate
-> Constrain
-> Crystallize
-> Actualize
-> Re-enter
```

### Breach

Preserve the Expressive Want and identify uncertainty.

Primary artifact:

```txt
Want record
```

### Resonate

Infer candidate intents, meanings, entities, and hypotheses. Establish Assertives about current and wanted states, with evidence and explicit uncertainty.

Primary artifacts:

```txt
Intent candidates
Evidenced current and wanted states
Gap assessment and assumptions
Hypothesis branches
Open questions
```

### Constrain

Specify Declaratives: required truths, rules, invariants, policies, and acceptance checks that bridge the gap. Establish who commits to delivering them and under what conditions before directing implementation.

Primary artifacts:

```txt
Form invariants
Facet policies
Manager commit rules
Acceptance tests
```

### Crystallize

The committer writes Directives, then derives Imperatives through procedures, Actions, Effects, Facets, and Manager routes.

Primary artifacts:

```txt
Delivery commitment
Committer-written Directives
Imperative procedures
Action contracts
Effect declarations
Facet maps
Manager boundary contract
```

### Actualize

Execute Imperatives, run the system, execute Effects, verify behavior, and materialize code. Check realized state against committed Declaratives and the original Want; test passage alone does not establish fulfillment.

Primary artifacts:

```txt
Running application
Scenario traces
Test results
Effect outcomes
```

### Re-enter

Convert feedback, failures, and resonance into the next assessment or a deliberately revised want. Record unmet commitments and re-enter at the appropriate step; do not silently change the original Want to fit the output.

Primary artifacts:

```txt
Resonance record
Revised want
New Intent candidates
```

## Wantware Artifacts

A Wantware process should leave behind a trail of named artifacts.

| Stage | Artifact | Purpose |
|-------|----------|---------|
| Written Wants | Want record | Preserve original human signal |
| Imprecise Intents and Evidenced States | Intent candidates and evidenced state claims | Interpret meaning and establish current/wanted states with uncertainty |
| Declarative Descriptions | Required truths, entity and capability notes | Specify what must become true to bridge the gap |
| Constraint Resolution | Invariants and policies | Bound possible behavior |
| Delivery Commitment | Accountable actor, scope, conditions | Bind delivery of the Declaratives to a committer |
| Directives | Committer-written work and completion criteria | Instruct work that makes required truths hold |
| Imperatives | Procedures and executable steps | Carry out and verify the Directives |
| Logical Legos | Action contracts | Define pure transitions |
| Composable Components | Facet and boundary maps | Compose capabilities |
| Begotten Behaviors | Scenario traces | Verify emergent behavior |
| Actualized Application | Running app and tests | Materialize the system |
| Feedback | Resonance records | Start the next spiral turn |

## Minimal Wantware Template

Use this template when starting from a raw want.

```md
# Wantware Brief

## Raw Want

## Intended Outcome

## Current and Wanted States / Evidence

## Assumptions and Uncertainty

## Gap to Bridge

## Actors

## Frictions

## Intent Candidates

## Required Truths / Things That Must Exist

## State Shapes

## Stable Identities

## Capabilities

## Invariants

## Acceptance Conditions

## Accountable Committer / Delivery Scope / Conditions

## Directives from the Committer / Completion Criteria

## Imperative Procedure / Dependencies / Failure Branches

## Actions

## Effects

## Impact Handlers

## Manager Boundary

## Scenarios

## Realization Evidence against Declaratives and Original Want

## Unmet Commitments / Resonance / Feedback
```

## Manager Boundary Prompt

For any actualized application, the Manager boundary should be explicit.

```txt
Owned state:

Accepted intents:

Emitted effects/events:

Returned outcomes:

Policy scope:

Commit invariants:

Impact handlers:
```

This keeps Wantware from becoming a loose brainstorming method. Every want must eventually find a state boundary, a routing path, a pure transformation, and an effect boundary.

## Agent Procedure

An agent using Wantware should follow this loop:

1. Preserve the user's raw Want as an Expressive, including its beneficiary.
2. Extract Intent candidates without pretending certainty; establish Assertives about current and wanted states with evidence, assumptions, and uncertainty.
3. Specify Declaratives that bridge the gap: required entities, state, capabilities, constraints, and acceptance conditions.
4. Record a Commissive from an accountable actor, with delivery scope and conditions.
5. Have that committer write Directives defining the work, dependencies, and completion criteria.
6. Derive Imperatives from the Directives and split pure transformations into Actions.
7. Group Actions into Facets; define Wrappers and Adapters for input.
8. Define Effects and Impact handlers for IO, and route state changes through a Manager boundary.
9. Execute and run scenarios; retain evidence for each acceptance check.
10. Check that Imperatives fulfilled Directives, delivery satisfied the committed Declaratives, and realized state satisfies the original Want.
11. Record unmet commitments and route mismatches to assessment, declaration, planning, or execution as appropriate. Revise the Want only explicitly.

Process determinism belongs to explicit inputs, obligations, validation rules, and success, failure, retry, and re-entry branches. Probabilistic interpretation or generation can participate, but outputs must pass the declared checks before acceptance. Deterministic process contracts do not guarantee an outcome: insufficient evidence or external conditions can leave a commitment unfulfilled.

## Practical Rule

Do not jump from want to code.

Jumping from want to code hides interpretation inside implementation. Wantware keeps interpretation visible long enough to test it.

The minimum viable chain is:

```txt
Expressive Want
-> Assertives: evidenced current and wanted states
-> Declaratives: required truths and acceptance conditions
-> Commissive: accountable delivery commitment
-> Directives written by the committer
-> Imperatives: Actions, Effects, and execution
-> Verification against required truths and the original Want
-> Feedback / re-entry
```

The AXIS implementation chain below sits within that contract, after commitment and Directives establish the work:

```txt
Committed required truths and Directives
-> Intent candidate
-> Form / Identity / Facet candidates
-> Adapter / Intent / Manager route
-> Action
-> Effect
-> Impact
-> Instance update
-> Wrapper projection
-> Feedback Intent
```

## Summary

Wantware is the art and procedure of making wants executable.

It treats desire as raw material, not as a specification. It preserves Expressives, establishes Assertives, specifies Declaratives, binds delivery through Commissives, and uses the committer’s Directives to guide executable Imperatives. Interpretation, ontology, constraints, logic, composition, and actualization support those obligations; evidence must establish fulfillment of the original Want. AXIS supplies the architectural containers. CHMM supplies the spiral. Wantware supplies the path from "I want" to "it works."

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
