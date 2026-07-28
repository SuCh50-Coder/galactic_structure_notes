# **Jeans Equations**

??? note
    This section is largely followed from the amazing lecture notes by [Prof. Paul Schechter](https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2004/pages/lecture-notes/) and [Jo Bovy](https://galaxiesbook.org/) 

## Distribution Function

Schwarzschild viewed the galaxy as a superposition of orbits. But, he prescribed a scheme that is straightforward in principle but difficult in practice. 

An alternate view of galaxies is as a system of particles in six dimensional _phase space_. The galaxy can then be instantaneously described as a **distribution function** $f (\vb{x}, \vb{p})$ over the phase space. However, a phase space density that reproduces the density and potential of a galaxy at one instant will not _in general_ reproduce 
itself at later (or earlier times).


## Collisionless Boltzmann Equation (CBE)

Recall from your [statistical mechanics course](https://www.susnata.com/wp-content/uploads/2026/07/StatMech_Formula_Sheet.pdf) about **Liouville's theorem**. It follows that, the time evolution of the phase space density is governed by a a 6-D equation of continuity that is analogous to the familiar 3-D equation of continuity in fluid mechanics.

Each point in phase space is described by a 6-D vector $\vb{w} = (\vb{x}, \vb{p})$ (generalized coordinates). The equation of continuity is then (written in Einstein's convention) 


\begin{align}
\dv{f}{t} =  \frac{\partial f}{\partial t} +  \frac{\partial}{\partial w_\alpha}(f \dot{w}_\alpha) &= 0 \\
\frac{\partial f}{\partial t} + \dot{w}_\alpha \frac{\partial f}{\partial w_\alpha} + f \frac{\partial \dot{w}_\alpha}{\partial w_\alpha} &= 0
\end{align}

??? tip "Hamilton Formalism"

    Let us say, we have to express this equation in a particular coordinate system. Write down it's hamiltonian $H(\vb{x}, \vb{p})$. Then use the fact that, 

    \begin{align*}
    0 &= \frac{\partial f}{\partial t} + \{ f, H \} \\
     &= \frac{\partial f}{\partial t} 
    + \frac{\partial f}{\partial \mathbf{x}} \cdot \frac{\partial H}{\partial \mathbf{p}} - \frac{\partial f}{\partial \mathbf{p}} \cdot \frac{\partial H}{\partial \mathbf{x}}
    \end{align*}



We find that

\begin{equation}
\sum_{\alpha=1}^6 \frac{\partial \dot{w}_\alpha}{\partial w_\alpha} = \sum_{i=1}^3 \left( \frac{\partial p_i}{\partial x_i} + \frac{\partial \dot{p}_i}{\partial p_i} \right) = 0,
\end{equation}

where the first part of the sum is zero because the velocities are necessarily not explicit functions of position (hence six dimensions in phase space and not fewer). The equation of motion tells us that $\dot{p}_i = -\frac{\partial}{\partial x_i} \Phi(\vb{x})$ (for unit mass) and thus $\dot{p}_i$ is a function of position only, and so the second term also vanishes. 

!!! success "CBE!"

    A slight massaging gives us, collisionless Boltzmann equation

    \begin{equation}
    \frac{\partial f}{\partial t} + \vb{p} \cdot \vb{\nabla} f - \vb{\nabla}\Phi \cdot \frac{\partial f}{\partial \vb{p}} = 0.
    \label{eq:cbe}
    \end{equation}

The CBE can be used simultaneously for many different species in a galaxy, each with its own distribution function. 


## in Cylindrical Coordinates

As we did for the Poisson Equation, let us rewrite the Eq. ($\ref{eq:cbe}$) in cylindrical coordinates, using

\[
H = \frac{1}{2}\left(p_R^2 + \frac{p_\phi^2}{R^2} + p_z^2\right) + \Phi
\]

Hence the full CBE is,

\begin{equation}
\frac{\partial f}{\partial t} 
    + p_R \frac{\partial f}{\partial R} 
    + \frac{p_\phi}{R^2} \frac{\partial f}{\partial \phi} 
    + p_z \frac{\partial f}{\partial z} 
    + \left( \frac{p_\phi^2}{R^3} - \frac{\partial \Phi}{\partial R} \right) \frac{\partial f}{\partial p_R} 
    - \frac{\partial \Phi}{\partial \phi} \frac{\partial f}{\partial p_\phi} 
    - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial p_z} 
= 0
\end{equation}

<!-- Substitute, $p_R = v_R$, $p_{\phi} = R v_{\phi}$ and $p_z = v_z$.


\begin{equation}
\frac{\partial f}{\partial t} + v_R \frac{\partial f}{\partial R} + \frac{v_\phi}{R} \frac{\partial f}{\partial \phi} + v_z \frac{\partial f}{\partial z} - \left( \frac{\partial \Phi}{\partial R} - \frac{v_\phi^2}{R} \right) \frac{\partial f}{\partial v_R} - \left( \frac{1}{R}\frac{\partial \Phi}{\partial \phi} + \frac{v_R v_\phi}{R} \right) \frac{\partial f}{\partial v_\phi} - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial v_z} = 0
\end{equation} -->

??? note "Standard Definitions"

    For $i,j \ \in {R, \phi, z}$

    $$ \sigma^2_{ij} \equiv Cov(v_i , v_j) = \expval{v_i v_j} - \expval{v_i} \expval{v_j} $$

    $$ Var(v_i) \equiv \sigma^2_{ii} $$

!!! info "Assumptions"
    We now adopt the standard assumptions for a steady-state, axisymmetric galaxy disk

    - **Steady-state hydrodynamic equilibrium:** $\frac{\partial}{\partial t} = 0$ and $\expval{v_R} = 0$
    - **Axisymmetry:** $\frac{\partial}{\partial \phi} = 0$
    - No net bulk flow in $z$ direction: $\langle v_z \rangle = 0$.  
    
    So we can substitute, $\sigma^2_{RR} = \langle v_R^2 \rangle$, and $\sigma^2_{zz} = \langle v_{z}^2 \rangle$



Applying our assumptions of a steady-state ($\frac{\partial f}{\partial t} = 0$) and axisymmetric ($\frac{\partial f}{\partial \phi} = 0$, $\frac{\partial \Phi}{\partial \phi} = 0$) system, this simplifies to:

\begin{equation}
p_R \frac{\partial f}{\partial R} 
    + p_z \frac{\partial f}{\partial z} 
    + \left( \frac{p_\phi^2}{R^3} - \frac{\partial \Phi}{\partial R} \right) \frac{\partial f}{\partial p_R} 
    - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial p_z} 
= 0
\label{eq:axisymm_cbe}
\end{equation}

To explore the steady-state dynamics of galactic disks, we first consider moments of the collisionless Boltzmann equation and construct the cylindrical Jeans equations for axisymmetric systems.


## Relating Kinematic Moments with Forces

To transition from the distribution function $f(\mathbf{x}, \vb{p})$ to observable macroscopic quantities (like density and velocity dispersion), we take the 1st order-moments of the CBE. 

Let us define some quantities -

- The _zeroth_ moment is just the **stellar number density**, which is defined as

$$\nu (\vb{x}) = \int \dd ^3\vb{p}  f (\mathbf{x}, \vb{p})$$

- The average of any quantity $Q$ (over all momenta) is

\[ \langle Q \rangle = \frac{1}{\nu} \int \dd ^3\vb{p} \  Q f \]

### 1. Expression for $K_z$

This involves multiplying Equation ($\ref{eq:axisymm_cbe}$) by $p_z$ and integrating over all momenta space 

$$\dd ^3\mathbf{p} = \dd p_R \dd p_\phi \dd p_z = R \dd v_R \dd v_\phi \dd v_z $$

Integrating the terms piece by piece :

$$\int p_z \left( p_R \frac{\partial f}{\partial R} \right) \dd^3\vb{p} = \frac{\partial}{\partial R} (\nu \langle p_R p_z \rangle)$$

$$\int p_z \left( p_z \frac{\partial f}{\partial z} \right) \dd^3\vb{p} = \frac{\partial}{\partial z} (\nu \langle p_z^2 \rangle)$$

$$\int p_z \left( - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial p_z} \right) \dd ^3\vb{p} = 0 + \nu \frac{\partial \Phi}{\partial z}$$  

<!-- \begin{align*}
\int p_z \left( \frac{p_\phi^2}{R^3} - \frac{\partial \Phi}{\partial R} \right) \frac{\partial f}{\partial p_R} \dd ^3\vb{p} &= \int \dd ^3\vb{p} \  p_z \frac{p_\phi^2}{R^3} \frac{\partial f}{\partial p_R} - \int \dd ^3\vb{p} \  p_z \frac{\partial \Phi}{\partial R} \frac{\partial f}{\partial p_R}\\
\end{align*} -->

\begin{align*}
\int p_z \left( \frac{p_\phi^2}{R^3} - \frac{\partial \Phi}{\partial R} \right)
\frac{\partial f}{\partial p_R}\,\dd^3\vb{p}
&=
\int \dd^3\vb{p}\,
p_z \frac{p_\phi^2}{R^3}
\frac{\partial f}{\partial p_R}
-
\int \dd^3\vb{p}\,
p_z \frac{\partial \Phi}{\partial R}
\frac{\partial f}{\partial p_R}
\\
&=
\left[
p_z \frac{p_\phi^2}{R^3} f
\right]_{p_R=-\infty}^{+\infty}
-
\int
f\,
\frac{\partial}{\partial p_R}
\left(
p_z \frac{p_\phi^2}{R^3}
\right)
\dd^3\vb{p}
\\
&\qquad
-
\left[
p_z \frac{\partial \Phi}{\partial R} f
\right]_{p_R=-\infty}^{+\infty}
+
\int
f\,
\frac{\partial}{\partial p_R}
\left(
p_z \frac{\partial \Phi}{\partial R}
\right)
\dd^3\vb{p}
\\
&=
0
-
\int
f\,
\frac{\partial}{\partial p_R}
\left(
p_z \frac{p_\phi^2}{R^3}
\right)
\dd^3\vb{p}
+
0
+
\int
f\,
\frac{\partial}{\partial p_R}
\left(
p_z \frac{\partial \Phi}{\partial R}
\right)
\dd^3\vb{p}
\\
&=
0
\end{align*}



!!! note "Symmetry Considerations"
    The integrals involving derivatives with respect to $p_R$ and $p_\phi$ vanish when multiplied by $p_z$ because $p_z$ acts as a constant relative to those partial derivatives during integration by parts, and the boundary terms at $p \to \pm\infty$ go to zero.

!!! success "Axisymmetric, vertical Jeans Equation"

    Combining the surviving terms, we get the standard Jeans equation in the $z$-direction:

    \begin{equation}
    \boxed{\frac{\partial (\nu \langle p_R p_z \rangle)}{\partial R}  + \frac{\partial (\nu \langle p_z^2 \rangle)}{\partial z} + \nu \frac{\partial \Phi}{\partial z} = 0 \quad}
    \end{equation}

    or equivalently,

    \begin{equation}
    \boxed{ \frac{1}{R} \frac{\partial ( R \nu \langle v_R v_z \rangle)}{\partial R}  + \frac{\partial (\nu \langle v_z^2 \rangle)}{\partial z} + \nu \frac{\partial \Phi}{\partial z} = 0 \quad}
    \label{eq:vert_Jeans}
    \end{equation}

<!-- HOW ??? -->

In the previous page, recall that we defined the vertical force per unit mass as

\[ K_z \equiv -\frac{\partial \Phi}{\partial z} \]


Let's divide Equation ($\ref{eq:vert_Jeans}$) by $\nu$ and isolate $K_z$,

$$\boxed{K_z = \frac{1}{\nu} \frac{\partial (\nu \langle v_z^2 \rangle)}{\partial z} + \frac{1}{\nu} \frac{\partial (\nu \langle v_R v_z \rangle)}{\partial R} + \frac{\langle v_R v_z \rangle}{R} \quad}$$

Now, our target is to write $K_z$ in terms of _logarithmic slopes_.

#### Rearranging and Introducing Logarithmic Slopes

!!! note "Log-slope"
    We define the **log-slope** of some quantity $Q$ of the population with respect to some coordinate $x$ (= $R$ or $z$).


    $$\gamma_{Q,x} \equiv -\frac{\partial \ln [Q(x)]}{\partial \ln [x]} = -\frac{x}{Q} \frac{\partial Q}{\partial x}$$

    Rearranging, 

    $$\frac{\partial Q}{\partial x} = -Q \frac{\gamma_{Q,x}}{x}$$


- **1st term**

\begin{align*}
\frac{1}{\nu} \frac{\partial (\nu \langle v_z^2 \rangle)}{\partial z} &= \frac{1}{\nu} \left( \langle v_z^2 \rangle \frac{\partial \nu}{\partial z} + \nu \frac{\partial \langle v_z^2 \rangle}{\partial z} \right) \\
&= \frac{\langle v_z^2 \rangle}{\nu} \left( -\nu \frac{\gamma_{ \nu ,z}}{z} \right) + \left( -\langle v_z^2 \rangle \frac{\gamma_{\langle v_z^2 \rangle, z}}{z} \right) \\
&= -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{\nu,z} + \gamma_{\langle v_z^2 \rangle, z} \right]\\
\end{align*}


- **2nd term**

\begin{align*}
\frac{1}{\nu} \frac{\partial (\nu \langle v_R v_z \rangle)}{\partial R} &= \frac{1}{\nu} \left( \langle v_R v_z \rangle \frac{\partial \nu}{\partial R} + \nu \frac{\partial \langle v_R v_z \rangle}{\partial R} \right) \\
&= \frac{\langle v_R v_z \rangle}{\nu} \left( -\nu \frac{\gamma_{\nu,R}}{R} \right) + \left( -\langle v_R v_z \rangle \frac{\gamma_{\langle v_R v_z \rangle, R}}{R} \right) \\
&= -\frac{\langle v_R v_z \rangle}{R} \left[ \gamma_{\nu,R} + \gamma_{\langle v_R v_z \rangle, R} \right] \\
\end{align*}




Finally, Substitute these log-slope expressions back into our rearranged Jeans equation for $K_z$,

$$K_z = -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{\nu ,z} + \gamma_{\langle v_z^2 \rangle, z} \right] - \frac{\langle v_R v_z \rangle}{R} \left[ \gamma_{\nu ,R} + \gamma_{\langle v_R v_z \rangle, R} \right] + \frac{\langle v_R v_z \rangle}{R}$$

Factor out the common $\frac{\langle v_R v_z \rangle}{R}$ term from the last two components,

!!! success "Expression for $K_z$"

    \begin{equation}
    K_z = -\frac{\partial \Phi}{\partial z} =  -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{ \nu ,z} + \gamma_{\langle v_z^2 \rangle, z} \right] + \frac{\langle v_R v_z \rangle}{R} \left[ 1 - \gamma_{\nu ,R} - \gamma_{\langle v_R v_z \rangle, R} \right]
    \end{equation}


### 2. Expression for $F_R$

This involves multiplying Equation ($\ref{eq:axisymm_cbe}$) by $p_R$ and integrating over all momenta space (as we did for $K_z$). Following similar steps, we arrive at -

!!! success "Axisymmetric, radial Jeans Equation"

    \begin{equation}
    \frac{\partial}{\partial R}\!\left[\nu \expval{v_R^2}\right]
        + \frac{\partial}{\partial z}\!\left[\nu \expval{v_R v_z}\right]
        + \nu \left( \frac{\partial \Phi}{\partial R}
        + \frac{\expval{v_R^2} - \expval{v_\phi^2}}{R} \right) = 0
    \label{eq:rad_jeans}
    \end{equation}


In the previous page, recall that we defined the radial component of gravitational force per unit mass as

\[ F_R \equiv -\frac{\partial \Phi}{\partial R} \]


Rearranging Eq. ($\ref{eq:rad_jeans}$) for $F_R$, 

\[ F_R = \frac{\expval{v_R^2} - \expval{v_\phi^2}}{R} + \frac{1}{\nu} \frac{\partial}{\partial z}\!\left[\nu \expval{v_R v_z}\right] +  \frac{1}{\nu} \frac{\partial}{\partial R}\!\left[\nu \expval{v_R^2}\right] \]

Writing in terms of log-slope, we obtain our final expression 

!!! success "Expression for $F_R$"

    \begin{equation}
    F_R = -\frac{\partial \Phi}{\partial R} = -\frac{\expval{v_{\phi}^2}}{R}
    + \frac{\expval{v_{R}^2}}{R} \left[ 1 - \gamma_{\nu,R} - \gamma_{\expval{v_{R}^2},R} \right]
    - \frac{\expval{v_{R}v_{z}}}{z} \left[ \gamma_{\nu,z} + \gamma_{\expval{v_{R}v_{z}},z} \right]
    \end{equation}