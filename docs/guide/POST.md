---
sidebar_position: 1
---

# ****POST****

**POST**

Chia uses a consensus called proof of space and time, where participants prove to the network that they are storing a certain amount of data through a process called farming.  Proofs of space must be generated in a process called plotting, which is defined in the Chia proof of space construction document and first introduced in Beyond Hellman.

Chia's core algorithm is PoST (Proof of Space and Time), replacing PoW (Proof of Work) in Bitcoin.

Using PoST space proofs instead of PoW workload proofs is the biggest advantage of Chia. 

Chia's Proof of Space and Time (POST) mechanism still maintains the Satoshi Nakamoto consensus (decentralized and permissionless) while significantly reducing energy consumption.

Chia uses novel space and time proofs to reach blockchain consensus. Network participants called farmers allocate underutilized storage space to the network during the farming process. The naming of farming implies that it is more environmentally friendly than mining. Chia space construction proofs are designed to verify proofs efficiently and quickly, making the farming process very lightweight. Farming refers to low resource usage of CPUs on the host and the number of read requests to the underlying storage device used to store the graph (farming) - HDDs are idle 99.7% of the time and use only 0.6 IOPS (input/output operations per second) with sufficiently low CPU utilization.