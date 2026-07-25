# **Hagen & Helmi (2018)**

[![DOI](https://img.shields.io/badge/DOI-10.1051%2F0004--6361%2F201832903-blue?style=for-the-badge&logo=doi&logoColor=white)](https://doi.org/10.1051/0004-6361/201832903)


| Metadata | Details |
| :--- | :--- |
| *Authors* | Jorrit H. J. Hagen and Amina Helmi  |
| *Issue* | A&A Volume 615, July 2018 |
| *Publication Date* | 2018-07-20 |

!!! abstract "Abstract"

    This paper investigates the kinematics of red clump (RC) stars in the solar neighbourhood by combining data from TGAS and RAVE to constrain the local dark matter density ($\rho_{\rm DM}$)


---

## **Dataset**

[Red Clump (RC)](https://www.wikiwand.com/en/Red_clump) stars from the crossmatch between the following datasets:

* ??? note "_Tycho-Gaia_ Astrometric Solution (TGAS)"

        This dataset is used to obtain accurate astrometric solutions of the stars like positions, parallaxes and mean proper motions.

* ??? note "Radial Velocity Experiment Data Release 5 (RAVE DR5)"
    This dataset provides radial velocities, astrophysical parameters, as well as spectro-photometric parallaxes.

The following quality cuts were applied to select the preliminary 108 679 stars:

- For stars in galactic longitude $(b < 25^{\circ})$, a color criterion $J-K_s \geq 0.5$ is used that preferentially selects _giant stars_. Note: $J \sim 1235$ nm , $K_s \sim 2159$ nm - All in NIR

- `SNR_K` $> 20$ :  Quality cut on the signal.
- `ALGO_CONV` $= 0$ or $4$ : Algorithm Convergence is a flag produced by RAVE’s automated parameter estimation pipeline (e.g., MATISSE/SPARV) indicating whether the spectral fitting routine converged. 
    - `0` : Normal, successful convergence.
    - `4` : Convergence reached under specific acceptable boundary conditions defined by the pipeline team.

    This cut rejects stars where the optimization algorithm failed, diverged, or produced non-physical, unstable parameter estimates.

- `eHRV` $< 8\text{ km s}^{-1}$ : is the measurement error (uncertainty) in the star's Heliocentric Radial Velocity (line-of-sight velocity relative to the Sun).  To calculate accurate 3D spatial velocities ($U, V, W$) of stars in the Galaxy, RAVE radial velocities are combined with TGAS proper motions. Restricting the radial velocity uncertainty to less than $8\text{ km s}^{-1}$ ensures the resulting 3D velocity vectors remain highly precise for kinematic and dynamic analysis.

- `flag_any` $= 0$ means zero warnings were triggered.


### Selecting RC stars sample

To gain more in distance accuracy we use RC stars, as they act as standard candles. However there will be some contamination of red giant branch (RGB) stars since RAVE does not provide asteroseismic information that can be
used to discriminate between RC and RGB stars. 

Before proceeding further note that,  $\log g_{\text{PJM}}$ is the stellar surface gravity estimate ($\log_{10} g$, where $g$ is measured in $\text{cm s}^{-2}$) derived from the Bayesian pipeline developed by Paul J. McMillan et al. (2017).

The following criteria is used to select 26 653 stars

- Extinction-Corrected Near-Infrared Color Range:

\[ 0.52 \le (J - K_S)_{\text{corr}} \le 0.72 \]

Note: $J_{\text{corr}} = J - 0.282 A_V$ and $K_{S,\text{corr}} = K_S - 0.112 A_V$ (where $A_V$ is taken from PJM2018).

- Surface Gravity Range: 

$$2.35 \le \log(g)_{\text{PJM}} \le 2.60$$

Thereafter we calibrate the mean absolute magnitude of RC stars and its spread, we proceed to compute distances to our stars. 

!!! success "Dataset selection complete"

    Now that we have constructed a good quality kinematic dataset, we proceed to estimate the **local dark matter density** in the steady-state axisymmetric limit.


In the followimg sections, we first discuss the basic equations that relate the mass density to the kinematic moments, then describe how we measure these moments, and finally present our new determination and discuss the influence of the uncertainties on the main parameters of our
mass model.

## **Relating mass density to kinematic moments**


