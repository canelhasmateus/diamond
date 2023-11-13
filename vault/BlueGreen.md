---
tags:
    - software
    - fact
---

# BlueGreen

Two identical environments run different versions of the software.

- The blue environment is used to depict the current version of the application.
- the green environment will the new version being deployed.

Ensure the application is running as it should before the cutover.

This can be achieved by using a set of users, or an internal testing team. If anything goes wrong, roll back.

Properties

- Near zero downtime
- Quickly rollback changes

This switch is usually done at the [[DNS]] level or other similar routing means.

## References

# todo
