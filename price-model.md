---
title: Price model &ndash; Severity matrix
layout: page
parent: Security review process
nav_order: 1
---

# Price model &ndash; Only pay for what I find

The **per-finding** cost structure of a security review is given by a **base price** which is tiered with respect to severity.  
The base price, which is presented in the **quote**, is defined as the maximum price to be paid for an identified vulnerability.

<table style="min-width:30%" align="center">
  <tbody>
    <tr>
      <th>Severity</th>
      <th>Percentage of base price</th>
    </tr>
    <tr>
      <td align="center" style="background-color: #8D1700">Critical</td>
      <td align="right">100%</td>
    </tr>
    <tr>
      <td align="center" style="background-color: #C1201A">High</td>
      <td align="right">70%</td>
    </tr>
    <tr>
      <td align="center" style="background-color: #E2B230">Medium</td>
      <td align="right">30%</td>
    </tr>
    <tr>
      <td align="center" style="background-color: #48639C">Low</td>
      <td align="right">10%</td>
    </tr>
    <tr>
      <td align="center" style="background-color: #829399">Non-Critical</td>
      <td align="right">0%<sup>*</sup></td>
    </tr>
  </tbody>
</table>

\* 5%, if non-critical findings are required to be included in the report instead of being discussed in a call.  

**What determines the base price?**  
The base price is mainly determined by the following aspects:
* Size and complexity of the codebase
* Use of external contracts / libraries
* Interactions with other protocols
* Criticality based on projected total value locked

**What if you disagree with a finding or its severity assessment?**  
During the mitigation review, we can openly discuss such findings in order to find common ground.  
A prime example for such a finding is "Centralization risk", because as a security researcher it is my duty to point this out
although some centralized aspects about your protocol might be intended. Therefore you won't be charged in that case.  
  
**What if you prefer an upfront fixed price for the whole security review?**  
It is possible to opt for a traditional price model where I estimate the required amount of time in advance and multiply it with my hourly rate.


## Vulnerability risk severity assessment

The severity of a bug/vulnerability is assessed based on its potential economical impact and likelihood of incident.

<table style="min-width:30%" align="center">
  <tbody>
    <tr>
      <th colspan="2" rowspan="2">Risk severity matrix</th>
      <th colspan="3">Impact</th>
    </tr>
    <tr>
      <th>High</th>
      <th>Medium</th>
      <th>Low</th>
    </tr>
    <tr>
      <th rowspan="3" style="writing-mode: vertical-rl; transform: rotate(180deg); min-width: 40px;">Likelihood</th>
      <th>High</th>
      <td align="center" style="background-color: #8D1700">Critical</td>
      <td align="center" style="background-color: #C1201A">High</td>
      <td align="center" style="background-color: #E2B230">Medium</td>
    </tr>
    <tr>
      <th>Medium</th>
      <td align="center" style="background-color: #C1201A">High</td>
      <td align="center" style="background-color: #E2B230">Medium</td>
      <td align="center" style="background-color: #48639C">Low</td>
    </tr>
    <tr>
      <th>Low</th>
      <td align="center" style="background-color: #E2B230">Medium</td>
      <td align="center" style="background-color: #48639C">Low</td>
      <td align="center" style="background-color: #829399">Non-Critical</td>
    </tr>
  </tbody>
</table>

