# TookEffect Lab Proof

Disposable public proof repository used by TookEffect Lab for controlled verification fixtures and test evidence.

## Role

This repository is **not** the canonical TookEffect demo and is not a customer-facing product surface.

It exists to hold narrowly scoped proof fixtures used by internal/lab validation, including historical browser and external-context proof cases.

## Boundaries

- No TookEffect Core product source.
- No credentials, API keys, provider tokens, signing secrets, private configuration, or customer data.
- Keep fixtures disposable and understandable.
- Partner demos such as CircleCI, Oxagen, Conexus, or future trials should not depend on this repository unless an intentional dependency is explicitly documented.
- Shared demo behavior belongs in the canonical TookEffect Core / Agent Experience path rather than being implemented here.

## Naming

This repository was previously named `browser-proof`. The current repository name and role are `tookeffect-lab-proof`.
