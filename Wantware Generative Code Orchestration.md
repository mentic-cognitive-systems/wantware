# Wantware Generative Code Orchestration

This document specifies a process for using stronger agents to decompose wants into structured code-generation tasks that weaker local models can complete reliably.

The premise:

```txt
Small models are often poor at whole-system authorship.
Small models can often succeed at bounded code synthesis.
```

The system should therefore avoid asking a local model to "build the app." Instead, a stronger planning agent decomposes the application into a tree of precise, serializable generation units. Each unit is small enough to be generated, tested, corrected, and grafted into the larger codebase.

This is Wantware applied to code generation.

```txt
Expressive: original Want
-> Assertives: evidenced current and wanted states, assumptions, uncertainty
-> Declaratives: required truths and acceptance conditions
-> Commissive: accountable actor commits to delivery under explicit conditions
-> Directives: that committer authors the work and generation contracts
-> AXIS component map
-> Code tree
-> Generation leaves
-> Imperatives: local model drafts, checks, integration, and runtime operations
-> Strong model validation
-> Corrective loops
-> Integrated application
-> Evidence checked against required truths and the original Want
-> Runtime feedback and defined re-entry
```

The sequence follows [The WantWare Development Process](The%20WantWare%20Development%20Process.md#31-the-speech-act-flow). A plan is not a delivery commitment, and passing code checks alone is not evidence that the original Want was fulfilled. The stronger agent can propose plans and help author contracts; an accountable committer must adopt the delivery scope and author or explicitly adopt the Directives before execution. An agent may be the committer only when it has the authority and capacity to accept that obligation.

The deterministic part is the process contract: explicit inputs, obligations, gates, and success, failure, and re-entry branches. Probabilistic generation remains bounded by those checks. Unmet conditions remain unmet; they do not justify silently narrowing the Want.

## CODE

Code can be treated as:

```txt
Coherent Orchestration Driving Evaluations
```

Code is not merely text. It is serialized instruction structure. It sits on disk as string data, then becomes executable behavior when interpreted, compiled, or loaded by a runtime.

Traditional software stabilizes this structure:

```txt
draft -> revise -> test -> commit -> leave alone
```

That remains useful. Stable logic is fast, inspectable, and cheap to execute.

The opportunity is to make the system more alive without making it chaotic:

```txt
stable executable code
+ structured self-extension process
+ explicit validation loops
+ bounded generation tasks
= dynamic application growth
```

The application should be able to add capabilities, extend its own code, and improve its own structure through a disciplined cognitive process.

## Core Claim

A weaker model can generate useful code when the prompt gives it:

- a narrow target
- a precise signature
- local types and invariants
- expected return shape
- allowed dependencies
- forbidden side effects
- examples
- tests or behavioral checks
- serialization requirements

The stronger model should support decomposition, orchestration, evaluation, and correction within the committer’s Directives. The weaker model should perform bounded materialization. Model strength does not establish accountability or authority to accept delivery.

```txt
Strong model:
- preserves wants and establishes evidenced state claims and uncertainties
- proposes required truths and acceptance conditions
- supports the accountable committer in authoring Directives
- designs architecture within those Directives
- decomposes tree
- derives task contracts from the committer’s Directives
- validates outputs
- routes correction loops
- proposes integration after checks within the committer’s approval policy

Weak local model:
- fills one function
- creates one object
- writes one adapter
- implements one Action
- emits one Effect handler
- writes one test
- patches one bounded file
```

## Relationship To AXIS

AXIS gives the component vocabulary for generation units.

| AXIS Component | Generation Role |
|---|---|
| Form | Generate state shape, defaults, invariants |
| Instance | Generate seed state, fixtures, versioned examples |
| Identity | Generate stable addressing helpers |
| Token | Generate scoped runtime handles and claims objects |
| Facet | Generate capability maps |
| Intent | Generate normalized command/event objects |
| Action | Generate pure state transition functions |
| Manager | Generate routing, commit, and workflow coordination |
| Effect | Generate declarative side-effect schemas |
| Impact | Generate side-effect executors |
| Wrapper | Generate UI/API/CLI boundary hosts |
| Adapter | Generate raw input normalizers |

The most reliable generation targets are usually:

- Forms
- Intent constructors
- pure Actions
- Effect declarations
- Adapter normalizers
- small Impact handlers
- focused tests

The least reliable generation targets are usually:

- whole Managers
- cross-boundary workflows
- global refactors
- architectural decomposition
- security-sensitive policy
- broad dependency integration

Those should remain under stronger-agent control.

## Relationship To CodeMaps

CodeMaps already models software as a tree:

```txt
roots       entry points
trunk       runtime loop and lifecycle
branches    major components
thin limbs   extension seams
leaves      public interfaces and small units
cells       signatures, methods, functions
```

Generative orchestration uses the same shape in reverse.

CodeMaps reads an existing codebase from root to leaves. Wantware code generation grows a codebase from want to leaves, then grafts those leaves back into branches and trunk.

```txt
Read mode:
root -> trunk -> branches -> leaves -> cells

Generate mode:
Want -> evidenced state gap -> required truths -> delivery commitment
-> committer Directives -> trunk plan -> branch contracts -> leaf tasks
-> cell code and execution -> fulfillment evidence
```

Composer adds the grafting logic:

- shape compatibility
- contract compatibility
- dependency compatibility
- effect compatibility
- interface, recomposite, or direct integration strategy

Together:

```txt
Wantware preserves the Want, establishes the gap, specifies required truths,
and connects accountable delivery to instructions and fulfillment evidence.
AXIS decides where it belongs.
CodeMaps decides how the code tree is shaped.
Composer decides how generated pieces graft into the tree.
```

## The Generative Tree

The stronger agent should maintain a generation tree.

```txt
Application Want
+-- Capability Trunk
    +-- Major Branch: Goal Management
    |   +-- AXIS Branch: Forms
    |   |   +-- Leaf: GoalForm
    |   +-- AXIS Branch: Intents
    |   |   +-- Leaf: goal.declare Intent constructor
    |   +-- AXIS Branch: Actions
    |       +-- Leaf: declareGoal(state, intent)
    +-- Major Branch: Hypothesis Generation
    |   +-- Leaf: generateHypotheses Action
    |   +-- Leaf: HypothesisFacet entry
    |   +-- Leaf: hypothesis scenario test
    +-- Major Branch: Feedback
        +-- Leaf: recordFeedback Action
        +-- Leaf: resonance Effect schema
        +-- Leaf: feedback Adapter
```

Each leaf is a bounded generation task.

Each branch has a contract.

The trunk owns runtime coherence.

The root preserves the original Want and its beneficiary. Before generating leaves, attach evidenced current/wanted state claims, Declaratives, and an accountable delivery commitment to the tree. Branch and leaf contracts trace to Directives authored or adopted by that committer; a code tree alone does not supply those preceding steps.

## Generation Unit Contract

Every task sent to a weaker model should be serialized as a generation unit derived from a committed Directive. The following illustrative record fields are a proposed contract shape, not claims about an existing API. Semantic acceptance conditions precede task generation and should not be invented after seeing the generated code.

```json
{
  "id": "gen-action-declare-goal",
  "kind": "axis.action",
  "speechActTrace": {
    "wantRef": "want-guided-planning",
    "assertivesRef": "planning-current-and-wanted-state",
    "declarativesRef": "planning-required-truths",
    "commissiveRef": "planning-delivery-commitment",
    "committer": "workspace-capability-owner",
    "directiveRef": "directive-preserve-and-activate-goal"
  },
  "semanticAcceptance": [
    "A valid expressed goal is preserved and becomes the active workspace goal.",
    "Existing goals remain available and invalid input does not replace them."
  ],
  "targetFile": "src/app/actions/goal.actions.js",
  "symbol": "declareGoal",
  "signature": "declareGoal(state, intent) -> { delta, effects }",
  "purpose": "Add a new goal to workspace state and request persistence.",
  "inputs": {
    "state": {
      "shapeRef": "WorkspaceForm.state"
    },
    "intent": {
      "kind": "goal.declare",
      "payload": {
        "text": "string",
        "constraints": "string[]"
      }
    }
  },
  "outputContract": {
    "delta": {
      "goals": "new array containing appended goal",
      "activeGoalId": "id of new goal"
    },
    "effects": [
      {
        "kind": "PERSIST_WORKSPACE",
        "target": "workspace"
      }
    ]
  },
  "constraints": [
    "Do not mutate state.",
    "Do not call fetch, localStorage, Date.now, Math.random, or filesystem APIs.",
    "Return effects as data only.",
    "Preserve existing goals.",
    "Reject empty goal text with an INTENT_REJECTED effect."
  ],
  "availableHelpers": [
    "createGoalId(text)",
    "normalizeGoalText(text)"
  ],
  "examples": [
    {
      "state": { "goals": [], "activeGoalId": null },
      "intent": {
        "kind": "goal.declare",
        "payload": { "text": "Build a planner", "constraints": [] }
      },
      "expected": {
        "delta": {
          "goals": ["one new goal object"],
          "activeGoalId": "new goal id"
        },
        "effects": ["PERSIST_WORKSPACE"]
      }
    }
  ],
  "tests": [
    "appends valid goal",
    "does not mutate original state",
    "rejects empty goal",
    "declares persistence effect"
  ]
}
```

This contract is the lego mold. The generated code is the lego.

## Prompt Shape For Weak Models

Weak models should receive a prompt that is narrow, explicit, and boring.

```txt
You are generating one code unit only.

Source Directive and required truths:
...

Task:
Implement the function named declareGoal.

Signature:
export function declareGoal(state, intent) {
  // return { delta, effects }
}

Rules:
- Pure function only.
- No IO.
- No mutation.
- No imports except the listed helpers.
- Return exactly { delta, effects }.
- Do not modify unrelated code.

State shape:
...

Intent shape:
...

Required behavior:
...

Failure behavior:
...

Examples:
...

Output:
On success, return only the complete code for this function.
If required context is missing or inconsistent, return:
{"status":"blocked","reason":"...","unmetConditions":["..."]}
The coordinator routes this failure to contract review, not code integration.
```

The prompt should include the source Directive, required truths, semantic acceptance conditions, and failure route from the generation unit. It should ask the model to satisfy that contract, not to rewrite the Want, make a delivery commitment on another actor’s behalf, or infer missing architectural decisions. Missing evidence or incompatible conditions return to the stronger agent and committer before drafting.

## Strong-Agent Validation Loop

The stronger agent validates every generated unit before integration.

```txt
1. Confirm the state evidence, required truths, accepted commitment, and committer-authored Directive.
2. Derive the unit contract and checks from that Directive.
3. Ask local model for code.
4. Parse response and check serialization format and signature.
5. Run static checks and unit tests against the declared conditions.
6. Inspect side-effect boundaries.
7. If failure is local and clear, prompt bounded correction.
8. If repeated failure, escalate to stronger model or human.
9. If evidence, scope, or required truths are inadequate, re-enter Assertives, Declaratives, or commitment review; have the committer revise Directives before retrying.
10. Integrate only after unit and branch validation passes.
11. Execute scenarios and collect runtime evidence against the Declaratives and original Want.
12. Record fulfillment only when that evidence passes; otherwise record the unmet conditions and re-enter the appropriate step.
```

Correction prompt:

```txt
Your previous output failed validation.

Failure:
- Test "rejects empty goal" failed.
- Expected INTENT_REJECTED effect.
- Actual effects: []

Keep the same signature.
Change only the function body.
Return complete corrected function code only.
```

The correction loop should be bounded.

```txt
maxLocalAttempts: 3
then: stronger model repair
then: human review if architectural ambiguity remains
```

## Serialization Requirements

Generated code should always be accompanied by structured metadata.

```json
{
  "unitId": "gen-action-declare-goal",
  "status": "candidate",
  "language": "javascript",
  "targetFile": "src/app/actions/goal.actions.js",
  "symbol": "declareGoal",
  "axisComponent": "Action",
  "purity": "pure",
  "declaredEffects": ["PERSIST_WORKSPACE", "INTENT_REJECTED"],
  "dependencies": ["createGoalId", "normalizeGoalText"],
  "tests": ["goal.actions.test.js"],
  "validation": {
    "staticCheck": "pending",
    "unitTests": "pending",
    "boundaryCheck": "pending"
  }
}
```

This lets generated code become navigable, auditable, and recomposable.

The code is not just text. It is a node in a living code tree.

## Generation Ledger

The system should maintain a ledger of generated units.

```json
{
  "generationId": "turn-2026-04-29-001",
  "sourceWant": "I want the app to guide me from a vague idea into something buildable.",
  "intentCandidate": "workspace.declare_goal",
  "axisPath": ["Intent", "Action", "Effect"],
  "treePath": ["Workspace", "Goal Management", "Actions", "declareGoal"],
  "unitContract": "gen-action-declare-goal.json",
  "model": "local-small-model",
  "attempts": 2,
  "speechActTrace": {
    "assertivesRef": "planning-current-and-wanted-state",
    "declarativesRef": "planning-required-truths",
    "commissiveRef": "planning-delivery-commitment",
    "committer": "workspace-capability-owner",
    "directiveRef": "directive-preserve-and-activate-goal"
  },
  "validationResult": "passed",
  "fulfillmentEvidence": [],
  "fulfillmentStatus": "pending-runtime-evidence",
  "unmetConditions": [],
  "integratedCommit": null,
  "resonance": []
}
```

This ledger is the memory of self-extension.

It answers:

- Why does this code exist?
- What want produced it?
- What contract did it satisfy?
- Which model generated it?
- Which required truths and committer-authored Directive did it serve?
- What commitment authorizes this delivery scope?
- What checks passed, and what runtime evidence supports fulfillment of the Want?
- What feedback later challenged it?

## AXIS Generation Order

Before AXIS generation, preserve the Expressive; establish Assertives with evidence and uncertainty; specify Declaratives and acceptance conditions; record the accountable Commissive; and have the committer author the Directives. AXIS component generation then follows those Directives in this order:

1. Link the Want, state evidence, required truths, commitment, and Directive
2. Intent candidate
3. Form changes
4. Identity needs
5. Intent schema or constructor
6. Action contract
7. Effect schema
8. Impact handler, if needed
9. Facet registration
10. Adapter, if new input exists
11. Wrapper update, if new surface exists
12. Manager route or commit rule
13. Tests
14. Scenario trace
15. Ledger entry

Do not start with UI or Manager code unless the capability is purely presentational or purely orchestration-level.

Most generated logic should start as an Action contract.

## Prompt Decomposition Algorithm

The stronger agent should decompose wants with this algorithm:

```txt
1. Preserve the raw Expressive Want and beneficiary.
2. Establish Assertives about current and wanted states with evidence, assumptions, and uncertainties; extract candidate intents.
3. Specify Declaratives and semantic acceptance conditions for the state gap.
4. Obtain an accountable actor’s delivery commitment with scope and conditions.
5. Have that committer author or explicitly adopt Directives; identify new or changed capabilities from them.
6. Locate affected AXIS components and code tree branches.
7. Split Directives into generation leaves and rank them by dependency order.
8. Generate traceable contracts for leaves with no unresolved dependencies.
9. Send leaf contracts to local models.
10. Validate outputs; route local failures to bounded correction.
11. Graft passing outputs into branch and recompute branch tests.
12. Promote branch into trunk only when coherent.
13. Run scenario tests and collect runtime fulfillment evidence.
14. Check evidence against required truths and the original Want.
15. Record fulfillment or unmet conditions and route re-entry; revised delivery conditions require commitment and Directive review.
```

Dependency order:

```txt
Forms before Actions.
Intents before Adapters.
Actions before Facets.
Effects before Impact handlers.
Facet entries before Manager routes.
Tests before integration approval.
```

## Code Tree Growth States

Every node in the generative tree should have a state.

| State | Meaning |
|---|---|
| wanted | Raw desired capability exists |
| assessed | Current and wanted states have evidenced claims, assumptions, uncertainties, and candidate Intents |
| declared | Required truths bridge the state gap |
| constrained | Invariants and semantic acceptance checks specify those truths |
| committed | An accountable actor accepts delivery scope and conditions |
| directed | That committer has authored or adopted the work instructions |
| specified | Generation unit contract traces to a Directive and required truths |
| drafted | Model has produced code |
| validated | Static checks and tests pass |
| grafted | Code has been integrated into branch |
| actualized | Scenario behavior works in runtime; fulfillment review remains distinct |
| fulfilled | Evidence satisfies required truths and the original Want |
| unmet | Required evidence or conditions failed; record the unmet obligation and re-entry route |
| resonant | Feedback indicates mismatch or improvement opportunity |
| retired | Node was replaced, abandoned, or superseded |

This makes self-extension inspectable.

## Local Model Task Types

Good local model tasks:

```txt
Generate this pure function.
Generate this object literal from a schema.
Generate this Intent constructor.
Generate this Adapter that maps event fields to Intent fields.
Generate this test from examples.
Generate this small Impact handler with a given interface.
Generate this serialization descriptor.
```

Risky local model tasks:

```txt
Design the architecture.
Refactor the whole module.
Infer all hidden invariants.
Implement security policy.
Modify multiple unrelated files.
Coordinate async workflows across boundaries.
Resolve dependency conflicts.
```

The stronger agent should absorb the risky tasks or break them down further.

## Evaluation Types

Each generation unit should declare how it will be evaluated.

| Evaluation | Applies To | Purpose |
|---|---|---|
| Signature check | all units | Ensures expected symbol and shape exist |
| Purity check | Actions | Prevents IO and mutation |
| Schema check | Forms, Intents, Effects | Ensures serializable structure |
| Fixture test | Actions, Adapters | Confirms examples |
| Scenario test | branches | Confirms behavior across units |
| Boundary check | Manager, Impact | Confirms AXIS responsibilities |
| Graft check | integrations | Confirms compatibility with code tree |
| Fulfillment check | delivered capability | Checks runtime evidence against Declaratives and the original Want |

For Actions, the basic test is:

```txt
state + intent -> { delta, effects[] }
```

For Adapters:

```txt
raw event -> Intent
```

For Impact:

```txt
Effect -> external result or follow-up Intent
```

## Self-Extension Boundary

An application that can extend itself needs a strict self-extension boundary.

The self-extension system should not directly mutate the live runtime.

Recommended flow:

```txt
runtime feedback
-> resonance record
-> preserved or explicitly revised Expressive Want
-> evidenced current/wanted states and uncertainty
-> required truths and acceptance conditions
-> accountable delivery commitment
-> committer-authored Directives
-> generation branch
-> candidate code
-> validation sandbox
-> integration proposal
-> approval policy
-> activation token
-> runtime availability
-> execution evidence and fulfillment check
-> fulfillment or recorded unmet conditions and defined re-entry
```

This preserves the benefit of living software without letting unvalidated code rewrite the running system arbitrarily.

## Activation Tokens

Generated capabilities should become available through scoped activation.

```json
{
  "tokenKind": "capability.activation",
  "capability": "goal.declare",
  "scope": "workspace-session",
  "status": "staged",
  "claims": {
    "validated": true,
    "testsPassed": true,
    "humanApproved": false
  }
}
```

The Manager should decide whether a capability can be activated based on token claims and policy scope.

This keeps new code from becoming globally authoritative the moment it exists on disk.

## Minimal Implementation Shape

A first implementation does not need autonomous rewriting of the whole app.

Start with:

```txt
/wantware
  /wants
  /intents
  /generation-units
  /drafts
  /validation
  /ledger
  /scenario-traces
```

Minimal loop:

```txt
1. User expresses a Want; preserve it and the beneficiary.
2. Strong model establishes evidenced current/wanted states and uncertainty.
3. Specify required truths and acceptance conditions.
4. An accountable actor commits to delivery scope and conditions.
5. That committer authors or adopts Directives; the strong model derives generation-unit JSON and checks.
6. Local model drafts one code unit; execute checks.
7. Local failure produces bounded correction; ambiguous evidence, scope, or conditions re-enter the relevant preceding step.
8. Save a passing unit as a draft and propose a validated graft.
9. Human or policy approves integration within the delivery commitment.
10. Execute runtime scenarios and check evidence against required truths and the original Want; record fulfillment or unmet conditions and re-entry.
```

## Example Generation Unit Prompt

```txt
You are a local code generator working inside a Wantware/AXIS pipeline.

You must generate one AXIS Action under the committer-authored Directive below.

Source trace (illustrative):
Want: Preserve my goal so I can continue toward something buildable.
Assertives: The workspace supports goals; this input has not been recorded.
Wanted state: A valid new goal is preserved and active; existing goals remain.
Uncertainty: Wider planning behavior is outside this unit and requires scenario evidence.
Declaratives: Preserve valid input, reject empty input, retain existing goals, and request persistence.
Commissive: The workspace capability owner commits to delivering those conditions within the agreed workspace scope.
Directive from that owner: Implement and validate declareGoal, then verify persistence through the separate Impact and scenario checks.
Imperative task: Produce the function below; validation and runtime execution follow separately.

If the contract is inconsistent or required context is absent, return:
{"status":"blocked","reason":"...","unmetConditions":["..."]}
The coordinator routes this failure to contract review. Successful drafts return code only.

Component:
Action

Target symbol:
declareGoal

Signature:
export function declareGoal(state, intent)

Return shape:
{ delta, effects }

State shape:
{
  goals: Goal[],
  activeGoalId: string | null
}

Intent shape:
{
  kind: "goal.declare",
  payload: {
    text: string,
    constraints: string[]
  }
}

Rules:
- Pure function only.
- Do not mutate state.
- Do not perform IO.
- Do not call Date.now or Math.random.
- Use createGoalId(text) for ids.
- Use normalizeGoalText(text) before storing text.
- If text is empty after normalization, return no delta and one INTENT_REJECTED effect.
- On success, append the new goal and set activeGoalId.
- Always return an effects array.

On success, output only JavaScript code for the function; use the failure response above when blocked.
```

## Living Code Without Chaos

The system becomes alive by cycling through structured self-extension:

```txt
observe runtime
-> detect resonance
-> preserve or explicitly revise Expressive Want
-> assess current/wanted states with evidence and uncertainty
-> specify required truths
-> review accountable delivery commitment
-> committer authors Directives
-> derive unit contracts
-> draft code
-> evaluate
-> graft
-> activate
-> check execution evidence against required truths and original Want
-> record fulfillment or unmet conditions and re-entry
-> observe again
```

The system remains coherent because every generated unit has:

- an original Want source and beneficiary
- evidenced current/wanted states and uncertainty
- required truths and semantic acceptance conditions
- an accountable delivery commitment
- a committer-authored Directive
- an Intent
- an AXIS component type
- a tree location
- a contract
- tests
- validation metadata
- activation policy
- feedback trace

That is the difference between self-extension and uncontrolled code generation.

## Summary

The stronger model should operate as architect, decomposer, conductor, and evaluator.

The weaker local model should operate as a bounded code materializer.

Wantware supplies the sequence from expressed desire through evidenced states, required truths, accountable commitment, committer-authored instructions, execution, and fulfillment evidence. AXIS supplies the component discipline. CodeMaps supplies the tree shape. Composer supplies the grafting logic. Evaluation supplies the safety loop.

Together, they describe an agentically generative dynamic application: one that can grow new static logic through a living cognitive process.

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
