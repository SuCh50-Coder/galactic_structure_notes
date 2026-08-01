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

> This final equation can now be applied to multiple populations that satisfy the assumptions described.

!!! note "Future Precision"
    The authors emphasize that as data quality improves (e.g., with Gaia DR2), future studies should aim to solve the full set of equations without dropping terms from the Poisson equation, particularly when investigating larger Galactic heights.


## **Data Analysis**