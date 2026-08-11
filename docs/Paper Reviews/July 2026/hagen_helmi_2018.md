# **Hagen & Helmi (2018)**
## **Title:** The vertical force in the solar neighbourhood using red clump stars in TGAS and RAVE - _Constraints on the local dark matter density_ 

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

The (integrated) Poisson equation in cylindrical coordinates
links the **total surface mass density $\Sigma(R,z)$** to the components
of the gravitational force per unit mass in the radial, $F_R$, and
vertical direction, $K_z$, via

\begin{equation}
-2\pi G \, \Sigma(R, z) = K_z(R, z) + \int_{0}^{+z} \frac{1}{R} \frac{\partial \big(R F_R \big)}{\partial R} \, \dd z'
\label{eq:poisson_eq}
\end{equation}

where $\Sigma(R, z) = \int_{-z}^{+z} \rho_{\rm tot} (R, z') \dd z'$
> Check out the derivation of this equation [**here**](../../Concepts/01-Poisson_eq.md#poisson-equation).

Under the assumption of equilibrium, we can use the [ _Jeans
equations_ ](../../Concepts/02-Jeans_eq.md) to relate the moments of the distribution function of a population, such as its density and velocity moments, to the gravitational potential in which it moves $\Phi(R,z)$. Hence, we can write

\begin{equation}
K_z = -\frac{\partial \Phi}{\partial z} =  -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{ \nu ,z} + \gamma_{\langle v_z^2 \rangle, z} \right] + \frac{\langle v_R v_z \rangle}{R} \left[ 1 - \gamma_{\nu ,R} - \gamma_{\langle v_R v_z \rangle, R} \right]
\label{eq:Kzeq}
\end{equation}

and

\begin{equation}
F_R = -\frac{\partial \Phi}{\partial R} = -\frac{\expval{v_{\phi}^2}}{R}
+ \frac{\expval{v_{R}^2}}{R} \left[ 1 - \gamma_{\nu,R} - \gamma_{\expval{v_{R}^2},R} \right]
- \frac{\expval{v_{R}v_{z}}}{z} \left[ \gamma_{\nu,z} + \gamma_{\expval{v_{R}v_{z}},z} \right]
\label{eq:Freq}
\end{equation}


where $\gamma_{Q,x}$ is called the **log-slope** of $Q$ wrt coordinate $x$

$$\gamma_{Q,x} \equiv -\frac{\partial \ln [Q(x)]}{\partial \ln [x]} = -\frac{x}{Q} \frac{\partial Q}{\partial x}$$

!!! note

    The steady state assumption implies $\expval{v_R} = \expval{v_z} = 0$. So, ${\rm cov}(v_R, v_z) = \expval{v_R v_z}$, and $\sigma^2(v_R) = \expval{v_R^2}$ and analogously for $\sigma^2(v_z)$. 

- Now, since we have the velocity information for each of stars we can calculate the velocity/kinematic moments - $\expval{v_R^2} , \expval{v_R v_z}, \dots$ etc.

- Put this kinematic moments in Eqs. ($\ref{eq:Kzeq}$) and ($\ref{eq:Freq}$). Calculate the force fields $K_Z$ and $F_R$ respectively.

- Finally substitute this quantities in Eq ($\ref{eq:poisson_eq}$) and consequently  derive the total surface mass density!


However, this includes the contributions of 

$$ \rho_{\rm tot} = \rho_{\rm baryons} +  \rho_{\rm DM}$$

!!! note 

    The authors' note, that not only accurate measurements of the velocity moments* and their variation with R and z are needed, but also knowledge of the *radial* and vertical slopes* of the density distribution, and the surface densities of the various **baryonic components**; i.e. interstellar medium (ISM) and stars. Since their dataset does not allow them to derive these quantities reliably, they have to make additional assumptions.


## Problem Simplifications


To make the problem tractable with the available Red Clump (RC) star dataset, the authors apply several key physical and geometric assumptions:

*   **Neglecting Radial Force Terms:** The authors neglect the last term of the integrated Poisson equation ($\ref{eq:poisson_eq}$) — $\int_{0}^{+z} \frac{1}{R} \frac{\partial \big(R F_R \big)}{\partial R} \, \dd z'$ . This is justified because the circular velocity curve is approximately flat at the solar Galactocentric radius ($R = R_\odot$) and $z=0$, making this term nearly zero near the solar neighborhood. 

> And therefore, it can be neglected upto a few kpc in $z$.

??? info "Circular Velocity Curve"
    $$\frac{m v_c^2}{R} = -m \pdv{\Phi}{R} \implies v_c^2(R) = -R \left( \pdv{\Phi}{R} \right) = R F_R (R, z=0) \sim \text{ constant} $$

    in the solar neighbourhood.
    So, 

    $$  \pdv{(R F_R)}{R} \sim 0 $$

*   **Limiting Vertical Height:** While dropping the radial term can lead to an underestimate of surface mass density at high altitudes (up to 15% at 4 kpc), the authors restrict their study to $|z| \leq 1.5$ kpc, where the error is only a few percent. 

*   **Assuming Exponential Distributions:** The authors assume the stellar density follows an exponential disk profile. Furthermore, they assume that the velocity moments $\sigma^2(v_R)$ and $\sigma^2(v_z)$ also follow exponential profiles in $R$ with the same scale lengths as the stellar density.

*   **Constant Tilt Angle:** [Eq. $\ref{eq:Kzeq}$ last term] For the velocity moment $\mathrm{cov} (v_R, v_z) = \sigma_{Rz}$, the authors do not assume spherical alignment but instead assume the tilt angle is constant with respect to $R$.

??? info "Tilt Angle"

    The tilt angle ($\Theta_{\rm tilt}$) is simply the **orientation of the velocity ellipsoid** in the $(R,z)$ plane. The covariance ( $\mathrm{cov}(v_R,v_z)$ ) is precisely what produces this tilt. Let us see it's derivation.

    Contours of constant probability satisfy

    $$(\mathbf v-\bar{\mathbf v})^T \boldsymbol{\Sigma}^{-1} (\mathbf v-\bar{\mathbf v}) =\mathrm{constant}$$

    This is an ellipse. If $\sigma_{Rz}=0,$ the ellipse is aligned with the $R$ and $z$ -axes. Elif $\sigma_{Rz} \neq 0$ the ellipse is rotated.

    Let the principal axes be obtained by rotating through an angle ($\alpha$). Then, 

    $$
    \begin{pmatrix}
    v_1 \\
    v_2
    \end{pmatrix}
        = 
    \begin{pmatrix}
    \cos\alpha & \sin\alpha \\
    -\sin\alpha & \cos\alpha \\
    \end{pmatrix}
    \begin{pmatrix}
    v_R \\
    v_z
    \end{pmatrix}
    $$

    The covariance (dispersion) tensor is

    \[
    \boldsymbol{\Sigma}
    =
    \begin{pmatrix}
    \sigma_R^2 & \sigma_{Rz} \\
    \sigma_{Rz} & \sigma_z^2 \\
    \end{pmatrix},
    \]

    The covariance matrix in the rotated frame is 

    $$ \boldsymbol{\Sigma}' = R(\alpha) \boldsymbol{\Sigma} R^T(\alpha) $$

    The tilt angle ($\Theta_{\rm tilt}$) is then defined as that $\alpha$ such that, the off-diagonal terms in $\boldsymbol{\Sigma}'$ vanish!

    In other words,

    $$\frac{1}{2}(\sigma_z^2-\sigma_R^2)\sin (2 \Theta_{\rm tilt} )  +\sigma_{Rz}\cos (2 \Theta_{\rm tilt} ) = 0$$

    And so, 

    $$ \boxed{\tan{2 \Theta_{\rm tilt}} = \frac{2\sigma_{Rz}}{\sigma_R^2-\sigma_z^2}}$$


   

*   **Steady-State Equilibrium:** The system is assumed to be in an axisymmetric steady state, implying that the mean radial and vertical velocities are zero ($\langle v_R \rangle = \langle v_z \rangle = 0$).


> Our goal is to derive the simplified expression for the total surface mass density $\Sigma(R, z)$ by combining the integrated Poisson equation with the vertical Jeans equation.


We begin with the integrated Poisson equation (Eq. $\ref{eq:poisson_eq}$) [last term neglected] and the vertical Jeans equation (Eq. $\ref{eq:Kzeq}$):

\begin{equation}
-2\pi G\Sigma(R, z) \simeq  K_z(R, z) = -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{ \nu ,z} + \gamma_{\langle v_z^2 \rangle, z} \right] + \frac{\langle v_R v_z \rangle}{R} \left[ 1 - \gamma_{\nu ,R} - \gamma_{\langle v_R v_z \rangle, R} \right]
\label{eq:simplif_poisson}
\end{equation}

Under the assumption of an exponential disk with radial scale height $h_R$ and vertical scale height $h_z$, the density 

$$\nu \propto \exp(-R/h_R) \exp(-|z|/h_z)$$ 

This gives:

*   Vertical density log-slope: $\gamma_{\nu ,z} = \frac{|z|}{h_z}$
*   Radial density log-slope: $\gamma_{\nu ,R} = \frac{R}{h_R}$

Assuming the velocity moments follow the same radial scale length $h_R$:

\begin{align*}
\expval{v_z^2} &= \sigma^2(v_z)  \propto \exp(-R/h_R) f_1(z) \\
\expval{v_R^2} &= \sigma^2(v_R)  \propto \exp(-R/h_R) f_2(z)
\end{align*}

So, 

<!-- *   Radial log-slope of vertical variance: $\gamma_{\langle v_z^2 \rangle, R} = \frac{R}{h_R}$ -->
*   Radial log-slope of mixed moment: $\gamma_{\langle v_R v_z \rangle, R} = \frac{R}{h_R}$
*   Vertical log-slope of vertical variance: $\gamma_{\langle v_z^2 \rangle, z} = -\frac{z}{\sigma^2(v_z)} \frac{\partial \sigma^2(v_z)}{\partial z}$

Substituting these log-slopes into Eq. ($\ref{eq:simplif_poisson}$) ($z>0$)-

\begin{align*}
-2\pi G\Sigma(R, z) &\simeq   -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{ \nu ,z} + \gamma_{\langle v_z^2 \rangle, z} \right] + \frac{\langle v_R v_z \rangle}{R} \left[ 1 - \gamma_{\nu ,R} - \gamma_{\langle v_R v_z \rangle, R} \right] \\
&= -\frac{\sigma^2(v_z)}{z} \left[ \frac{z}{h_z} - \frac{z}{\sigma^2(v_z)} \frac{\partial \sigma^2(v_z)}{\partial z} \right] + \frac{\mathrm{cov} (v_R, v_z)}{R} \left[ 1 - \frac{R}{h_R} - \frac{R}{h_R} \right] \\
&= -\frac{\sigma(v_z)^2}{h_z} + \frac{\partial \sigma(v_z)^2}{\partial z} + \mathrm{cov} (v_R, v_z) \left[ \frac{1}{R} - \frac{2}{h_R} \right]
\end{align*}

!!! info "More _safe_ form?"

    If we don't assume $\expval{v_R} = \expval{v_z} = 0$. Then we need not replaced the quantitites by the variance. In that case, the equation will look like- 

    \begin{equation}
        -2\pi G\Sigma(R, z) \approx K_z =  -\frac{\expval{v_z^2}}{h_z} + \frac{\partial \expval{v_z^2}}{\partial z} +  \expval{v_R v_z} \left[ \frac{1}{R} - \frac{2}{h_R} \right]
    \label{eq:Kz_Safe}
    \end{equation}


> This final equation can now be applied to multiple populations that satisfy the assumptions described.

??? note "Future Precision"
    The authors emphasize that as data quality improves (e.g., with Gaia DR2), future studies should aim to solve the full set of equations without dropping terms from the Poisson equation, particularly when investigating larger Galactic heights.



## **Data Analysis**

Because the goal is to measure the contribution of dark matter more reliably, the authors focus on the bins at large Galactic heights,
since for small $z$ the baryons (are expected to) dominate the gravitational force. So they chose to explore only those bins for
which the central $z$-coordinate satisfies $|z| \geq 0.6$ kpc.

They calculate the vertical force at $R = R_{\odot}$ (solar nbd) for each component of the disk. 

\[ K_z ( R_{\odot}, z) = K_{z , {\rm thin}} ( R_{\odot}, z) + K_{z , {\rm thick}}( R_{\odot}, z)\]

If we use the equations of $\ref{eq:Kz_Safe}$, we will get

\begin{align*}
K_{z , {\rm thin}} &=  -\frac{\expval{v_z^2}_{(R_{\odot}, z)}}{h_{z , {\rm thin}}} + \frac{\partial \expval{v_z^2}}{\partial z} \bigg|_{(R_{\odot}, z)} +  \expval{v_R v_z}|_{(R_{\odot}, z)} \left[ \frac{1}{R_{\odot}} - \frac{2}{h_{R , {\rm thin}}} \right]\\
K_{z , {\rm thick}} &=  -\frac{\expval{v_z^2}_{(R_{\odot}, z)}}{h_{z , {\rm thick}}} + \frac{\partial \expval{v_z^2}}{\partial z} \bigg|_{(R_{\odot}, z)} +  \expval{v_R v_z}|_{(R_{\odot}, z)} \left[ \frac{1}{R_{\odot}} - \frac{2}{h_{R , {\rm thick}}} \right]
\end{align*}

The authors have used 

|  |  |
| :--- | :--- |
| $h_{R , {\rm thick}} = h_{R , {\rm thin}}$ | 2.5 kpc  |
| $h_{z , {\rm thin}}$ | 0.28 kpc |
| $h_{z , {\rm thick}}$ | 1.12 kpc |

In Sections 3.2 and 3.2.1, the authors describe their methodology for handling data uncertainties, extracting intrinsic kinematic moments, and defining the specific stellar populations used to measure the local dark matter density.


The authors now implement a statistical framework to account for distance uncertainties and measurement errors in the Red Clump (RC) sample:

*   **Distance Error Simulation:** To account for uncertainties in stellar distances, the authors generate **1000 realizations** of the absolute $K_S$-band magnitude for each RC star. These are drawn from a Gaussian distribution based on their previously calibrated mean ($M_{K_S} = -1.60$) and dispersion ($0.1$ mag).

??? note "Elaborated"

    To account for the significant impact of distance uncertainties on their kinematic analysis, the authors employ a **Monte Carlo-style simulation** to create a robust statistical foundation for their measurements.

    The process follows these specific steps:

    1. **Establishing the Probability Distribution**
    First, the authors define the statistical properties of the Red Clump (RC) stars' absolute magnitude based on their earlier calibration..
        *   **Mean ($\mu$):** $-1.60$ mag in the $K_S$-band.
        *   **Dispersion ($\sigma$):** $0.1$ mag.
        *   **Distribution:** They assume a **Gaussian (Normal) distribution**, $N(-1.60, 0.1^2)$, to represent the likelihood of a star's true absolute magnitude.

    1. **Generating 1000 Realizations**
    For every individual star in the RC sample (26,653 stars total), the authors "draw" or sample a value for its absolute magnitude ($M_{K_S}$) from this Gaussian distribution 1,000 times. 

        *   This results in **1,000 unique versions of the entire dataset**, where each version (realization) assigns a slightly different absolute magnitude to each star.

    1. **Calculating Distances** Because the distance ($d$) to a star is directly related to its apparent magnitude ($m$) and absolute magnitude ($M$) through the distance modulus formula ($m - M = 5 \log_{10}(d) - 5$), varying the absolute magnitude automatically varies the calculated distance.
        *   A dispersion of $0.1$ mag in absolute magnitude translates to approximately a **5% error in distance**.
        *   Consequently, each of the 1,000 realizations provides a different distance estimate for every star in the sample.

    1. **Coordinate Transformation and Error Propagation**
    For each of these 1,000 realizations, the authors perform the following:

        *   **Spatial Mapping:** They transform the stars' observables (sky positions and distances) into a **Galactocentric cylindrical coordinate frame** ($R, \phi, z$).
        *   **Velocity Calculation:** They combine the distances with proper motions (from TGAS) and radial velocities (from RAVE) to calculate the velocities ($v_R, v_\phi, v_z$).
        *   **Error Integration:** They propagate the actual measurement errors for proper motions and radial velocities within each specific realization.

    1. **Final Statistical Synthesis**
    After processing all 1,000 realizations independently—including binning the stars in $z$, removing outliers, and solving for intrinsic kinematic moments—the authors compute the **mean and dispersion of these moments across all realizations**. This final "mean profile" represents the kinematic state of the Galaxy while formally incorporating the uncertainties from distances, proper motions, and radial velocities into the final error bars.

*   **Coordinate Transformation:** For every realization, observable data (positions, proper motions, radial velocities) are transformed into a **Galactocentric cylindrical coordinate frame** ($R, \phi, z$) and velocities ($v_R, v_\phi, v_z$). 

*   **Error Propagation:** They propagate measurement errors, assuming no error in positional coordinates but utilizing the _TGAS covariance matrix_ for proper motion errors. Radial velocity errors from RAVE are treated as independent of proper motions.

*   **Spatial Selection and Symmetry:** The analysis focuses on the vertical trend of the gravitational force ($K_z$). Consequently, they only select stars within **0.5 kpc** of the solar radius ($R_\odot$). They assume vertical symmetry and "fold" the data by flipping the signs of $z$ and $v_z$ for stars below the Galactic plane.

*   **Outlier Removal:** Stars are grouped into bins in $z$ (minimum 100 stars per bin). Within each bin, they iteratively remove outliers in $(v_R, v_z, v_\phi)$-space that fall outside a _tilted velocity ellipsoid_ containing 99.994% of a theoretical multivariate Gaussian distribution.

??? note "Elaborated"

    This step is performed within each of the 1,000 realizations to ensure that the final kinematic profiles are not skewed by non-member stars or those with extreme, erroneous measurements.

    The authors perform this step using the following methodology:

    1. **Localized Cleaning in $z$-bins**
    The outlier removal is not done for the whole sample at once; instead, it is performed **locally within each vertical bin** ($z$).

        *   Each bin is required to have a minimum of **100 stars** to ensure the statistical properties of the bin are well-defined.
        *   The data in these bins is "folded" across the Galactic plane, treating stars at $-z$ as being at $+z$ to maximize the sample size for each vertical height.

    1. **The 3D Velocity Space**
        The authors define the _neighborhood_ of acceptable velocities in a three-dimensional space: $(v_R, v_z, v_\phi)$. 
        *   Unlike simpler filters that might only look at one velocity component at a time, this method looks at how a star moves in all three dimensions simultaneously.
        *   The boundary for what is considered an outlier is a **tilted velocity ellipsoid**. This 3D shape accounts for the fact that the velocity dispersions are not the same in all directions (e.g., $\sigma_{v_R} \neq \sigma_{v_z}$) and that the axes of the ellipsoid are "tilted" relative to the coordinate system.

    1. **The "Iterative" Nature of the Clipping**
    The term _iterative_ is key to the robustness of this step. The process might follow this cycle:

        1.  **Initial Calculation:** The mean velocities and the shape of the velocity ellipsoid (covariance) are calculated for all stars currently in the bin.
        2.  **Comparison:** Every star is checked to see if its velocity vector $(v_R, v_z, v_\phi)$ falls inside the ellipsoid that would contain **99.994%** of stars in a perfect multivariate Gaussian distribution.
        3.  **Removal:** Stars falling outside this threshold (extreme outliers) are removed.
        4.  **Repeat:** Because the removal of outliers changes the calculated mean and dispersion of the bin, the ellipsoid is _recalculated_ using the remaining stars, and the process is repeated until no more stars are eliminated.

    4. **Why 99.994%?**
        This specific threshold is chosen to be extremely conservative. In a standard 1D normal distribution, this percentage corresponds to approximately **$4\sigma$** (four standard deviations). 
        *   By setting the bar this high, the authors ensure they only remove the most "extreme" outliers—stars that are statistically very unlikely to belong to the core population of the thin or thick disk.
        *   This prevents the "clipping" from artificially shrinking the natural spread (intrinsic dispersion) of the stellar population, which is the very thing they are trying to measure to find the local dark matter density.

    5. **Conclusion**
    This step effectively cleans the data of:
        *   **Halo stars** that might have wandered into a disk sample.
        *   **Stars with catastrophic measurement errors** in proper motion or radial velocity that survived initial quality cuts.
        *   **Stars from moving groups or streams** that do not represent the steady-state equilibrium the authors assume in their Jeans modeling.


*   **Solving for Intrinsic Moments:** Because measurement errors inflate observed velocity dispersions, the authors solve for the _intrinsic moments_ by maximizing a bivariate Gaussian likelihood function for each bin.

    **Individual Likelihood Function:**

    \[L_i = \frac{1}{\sqrt{\det(2\pi \boldsymbol{\Sigma}_i)}} \exp \left[ -\frac{1}{2}(\vb{x}_i - \boldsymbol{\mu})^T \Sigma_i^{-1} (\vb{x}_i - \boldsymbol{\mu}) \right]\]

    Where $\vb{x}_i = [v_{R,i}, v_{z,i}]$, $\boldsymbol{\mu} = [\langle v_R \rangle, \langle v_z \rangle]$, and the covariance matrix $\Sigma_i$ incorporates both intrinsic dispersions ($\sigma_{\rm intr}$) and individual measurement errors ($\varepsilon_i$):

    \[\boldsymbol{\Sigma}_i = \begin{bmatrix} \sigma^2(v_R)_{\rm intr} + \varepsilon^2(v_{R,i}) & cov(v_R, v_z)_{\rm intr} + cov(v_{R,i}, v_{z,i}) \\ cov(v_R, v_z)_{\rm intr} + cov(v_{R,i}, v_{z,i}) & \sigma^2(v_z)_{\rm intr} + \varepsilon^2(v_{z,i}) \end{bmatrix}\]

    **Total Likelihood Function:**

    \[L = \prod_{i=1}^N L_i\]

*   **MCMC Modeling:** Finally, they utilize _Markov chain Monte Carlo (MCMC)_ to solve for the five intrinsic parameters: mean velocities ($\langle v_R \rangle, \langle v_z \rangle$), intrinsic dispersions ($\sigma(v_R)_{\rm intr}, \sigma(v_z)_{\rm intr}$), and the covariance term ($cov(v_R, v_z)_{\rm intr}$)

---

### Vertical Velocity Dispersion Profiles

This section details how the authors segregate the tracer stars into distinct disk components to satisfy the requirements of their mass model:

1.   **Population Separation:** The authors recognize that the thin and thick disks have different spatial and kinematic distributions. The **thick disk** is characterized as being "hotter" (higher velocity dispersion), having a larger scale height, and being more metal-poor.

1.   **Metallicity Selection:** They test various metallicity ([Fe/H]) boundaries to find clean samples:
    *   **Thin Disk:** They find that the dispersion profile is insensitive to the exact metallicity cut and adopt $Met\_N\_K \geq -0.25$ dex.
    *   **Thick Disk:** The dispersion profile for this population is highly sensitive to the upper metallicity boundary due to contamination from the "tail" of the thin disk. To ensure a clean sample while maintaining a sufficient number of stars, they adopt a range of $-1.00 \leq Met\_N\_K \leq -0.50$ dex.

1.   **Mean Profile Computation:** After obtaining intrinsic moments for all 1000 realizations, they compute the **mean and dispersion of these moments** across all realizations. These final profiles account for errors in proper motions, radial velocities, and distance uncertainties.

1.   **Observations:** The resulting profiles show that vertical velocity dispersion $\sigma(v_z)$ increases quicklywith $z$ near the plane, but the variation becomes much shallower above $z \sim 0.5$ kpc, particularly for the thick disk population.