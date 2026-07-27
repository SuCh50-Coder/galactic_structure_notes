# **Jeans Equations**

??? note
    This section is largely followed from the amazing lecture notes by [Prof. Paul Schechter](https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2004/pages/lecture-notes/). 

## Distribution Function

Schwarzschild viewed the galaxy as a superposition of orbits. But, he prescribed a scheme that is straightforward in principle but difficult in practice. 

An alternate view of galaxies is as a system of particles in six dimensional _phase space_. The galaxy can then be instantaneously described as a **distribution function** $f (\vb{x}, \vb{v})$ over the phase space. However, a phase space density that reproduces the density and potential of a galaxy at one instant will not _in general_ reproduce 
itself at later (or earlier times).


## Collisionless Boltzmann Equation (CBE)

Recall from your [statistical mechanics course](https://www.susnata.com/wp-content/uploads/2026/07/StatMech_Formula_Sheet.pdf) about **Liouville's theorem**. It follows that, the time evolution of the phase space density is governed by a a 6-D equation of continuity that is analogous to the familiar 3-D equation of continuity in fluid mechanics.

Each point in phase space is described by a 6-D vector $\vb{w} = (\vb{x}, \vb{v})$ (generalized coordinates). The equation of continuity is then (written in Einstein's convention) 


\begin{align}
\dv{f}{t} =  \frac{\partial f}{\partial t} +  \frac{\partial}{\partial w_\alpha}(f \dot{w}_\alpha) &= 0 \\
\frac{\partial f}{\partial t} + \dot{w}_\alpha \frac{\partial f}{\partial w_\alpha} + f \frac{\partial \dot{w}_\alpha}{\partial w_\alpha} &= 0
\end{align}

??? tip "Hamilton Formalism"

    Let us say, we have to express this equation in a particular coordinate system. Write down it's hamiltonian $H(\vb{x}, \vb{v})$. Then use the fact that, 

    \begin{align*}
    0 &= \frac{\partial f}{\partial t} + \{ f, H \} \\
     &= \frac{\partial f}{\partial t} 
    + \frac{\partial f}{\partial \mathbf{x}} \cdot \frac{\partial H}{\partial \mathbf{p}} - \frac{\partial f}{\partial \mathbf{p}} \cdot \frac{\partial H}{\partial \mathbf{x}}
    \end{align*}



We find that

\begin{equation}
\sum_{\alpha=1}^6 \frac{\partial \dot{w}_\alpha}{\partial w_\alpha} = \sum_{i=1}^3 \left( \frac{\partial v_i}{\partial x_i} + \frac{\partial \dot{v}_i}{\partial v_i} \right) = 0,
\end{equation}

where the first part of the sum is zero because the velocities are necessarily not explicit functions of position (hence six dimensions in phase space and not fewer). The equation of motion tells us that $\dot{v}_i = -\frac{\partial}{\partial x_i} \Phi(\vb{x})$ and thus $\dot{v}_i$ is a function of position only, and so the second term also vanishes. 

!!! success "CBE!"

    A slight massaging gives us, collisionless Boltzmann equation

    \begin{equation}
    \frac{\partial f}{\partial t} + \vb{v} \cdot \vb{\nabla} f - \vb{\nabla}\Phi \cdot \frac{\partial f}{\partial \vb{v}} = 0.
    \label{eq:cbe}
    \end{equation}

The CBE can be used simultaneously for many different species in a galaxy, each with its own distribution function. 


## in Cylindrical Coordinates

As we did for the Poisson Equation, let us rewrite the Eq. ($\ref{eq:cbe}$) in cylindrical coordinates,  with corresponding velocities $(v_R, v_\phi, v_z)$. The Hamiltonian reads

\[
H = \frac{1}{2}\left(p_R^2 + \frac{p_\phi^2}{R^2} + p_z^2\right) + \Phi
\]

Hence the full CBE becomes,

\begin{equation}
\frac{\partial f}{\partial t} 
    + p_R \frac{\partial f}{\partial R} 
    + \frac{p_\phi}{R^2} \frac{\partial f}{\partial \phi} 
    + p_z \frac{\partial f}{\partial z} 
    - \left( \frac{\partial \Phi}{\partial R} - \frac{p_\phi^2}{R^3} \right) \frac{\partial f}{\partial p_R} 
    - \frac{\partial \Phi}{\partial \phi} \frac{\partial f}{\partial p_\phi} 
    - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial p_z} 
= 0
\end{equation}

Substitute, $p_R = v_R$, $p_{\phi} = R v_{\phi}$ and $p_z = v_z$.


\begin{equation}
\frac{\partial f}{\partial t} + v_R \frac{\partial f}{\partial R} + \frac{v_\phi}{R} \frac{\partial f}{\partial \phi} + v_z \frac{\partial f}{\partial z} - \left( \frac{\partial \Phi}{\partial R} - \frac{v_\phi^2}{R} \right) \frac{\partial f}{\partial v_R} - \left( \frac{1}{R}\frac{\partial \Phi}{\partial \phi} + \frac{v_R v_\phi}{R} \right) \frac{\partial f}{\partial v_\phi} - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial v_z} = 0
\end{equation}

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
v_R \frac{\partial f}{\partial R} + v_z \frac{\partial f}{\partial z} - \left( \frac{\partial \Phi}{\partial R} - \frac{v_\phi^2}{R} \right) \frac{\partial f}{\partial v_R} - \frac{v_R v_\phi}{R} \frac{\partial f}{\partial v_\phi} - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial v_z} = 0
\label{eq:axisymm_cbe}
\end{equation}

## Relating Kinematic Moments with Forces

To transition from the distribution function $f(\mathbf{x}, \mathbf{v})$ to observable macroscopic quantities (like density and velocity dispersion), we take the 1st order-moments of the CBE. 

Let us define some quantities -

- The _zeroth_ moment is just the **stellar number density**, which is defined as

$$\nu (\vb{x}) = \int \dd ^3\mathbf{v}  f (\mathbf{x}, \mathbf{v})$$

- The average of any quantity $Q$ (over velocity space) is

\[ \langle Q \rangle = \frac{1}{\nu} \int Q f \dd ^3\mathbf{v}\]

### 1. Expression for $K_z$

This involves multiplying Equation ($\ref{eq:axisymm_cbe}$) by $v_z$ and integrating over all velocity space 

$$\dd ^3\mathbf{v} = \dd v_R \dd v_\phi \dd v_z$$

Integrating the terms piece by piece (and noting that terms like $\int v_z \frac{\partial f}{\partial v_z} d^3\mathbf{v}$ are solved via integration by parts, which yields $-\nu$):

$$\int v_z \left( v_R \frac{\partial f}{\partial R} \right) d^3\mathbf{v} = \frac{\partial}{\partial R} (\nu \langle v_R v_z \rangle)$$

$$\int v_z \left( v_z \frac{\partial f}{\partial z} \right) d^3\mathbf{v} = \frac{\partial}{\partial z} (\nu \langle v_z^2 \rangle)$$

$$\int v_z \left( - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial v_z} \right) d^3\mathbf{v} = \nu \frac{\partial \Phi}{\partial z}$$

!!! note "Symmetry Considerations"
    The integrals involving derivatives with respect to $v_R$ and $v_\phi$ vanish when multiplied by $v_z$ because $v_z$ acts as a constant relative to those partial derivatives during integration by parts, and the boundary terms at $v \to \pm\infty$ go to zero.

!!! success "Vertical Jeans Equation"

    Combining the surviving terms, we get the standard Jeans equation in the $z$-direction:

    \begin{equation}
    \frac{\partial (\nu \langle v_R v_z \rangle)}{\partial R} + \frac{\nu \langle v_R v_z \rangle}{R} + \frac{\partial (\nu \langle v_z^2 \rangle)}{\partial z} + \nu \frac{\partial \Phi}{\partial z} = 0 \quad
    \label{eq: vert_Jeans}
    \end{equation}

In the previous page, recall that we defined the vertical force per unit mass as

\[ K_z \equiv -\frac{\partial \Phi}{\partial z} \]


Let's divide Equation ($\ref{eq: vert_Jeans}$) by $\nu$ and isolate $K_z$,

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
&= \frac{\langle v_z^2 \rangle}{\nu} \left( -\nu \frac{\gamma_{*,z}}{z} \right) + \left( -\langle v_z^2 \rangle \frac{\gamma_{\langle v_z^2 \rangle, z}}{z} \right) \\
&= -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{*,z} + \gamma_{\langle v_z^2 \rangle, z} \right]\\
\end{align*}


- **2nd term**

\begin{align*}
\frac{1}{\nu} \frac{\partial (\nu \langle v_R v_z \rangle)}{\partial R} &= \frac{1}{\nu} \left( \langle v_R v_z \rangle \frac{\partial \nu}{\partial R} + \nu \frac{\partial \langle v_R v_z \rangle}{\partial R} \right) \\
&= \frac{\langle v_R v_z \rangle}{\nu} \left( -\nu \frac{\gamma_{*,R}}{R} \right) + \left( -\langle v_R v_z \rangle \frac{\gamma_{\langle v_R v_z \rangle, R}}{R} \right) \\
&= -\frac{\langle v_R v_z \rangle}{R} \left[ \gamma_{*,R} + \gamma_{\langle v_R v_z \rangle, R} \right] \\
\end{align*}




Finally, Substitute these log-slope expressions back into our rearranged Jeans equation for $K_z$,

$$K_z = -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{*,z} + \gamma_{\langle v_z^2 \rangle, z} \right] - \frac{\langle v_R v_z \rangle}{R} \left[ \gamma_{*,R} + \gamma_{\langle v_R v_z \rangle, R} \right] + \frac{\langle v_R v_z \rangle}{R}$$

Factor out the common $\frac{\langle v_R v_z \rangle}{R}$ term from the last two components,

!!! success "Expression for $K_z$"

    \begin{equation}
    K_z = -\frac{\langle v_z^2 \rangle}{z} \left[ \gamma_{*,z} + \gamma_{\langle v_z^2 \rangle, z} \right] + \frac{\langle v_R v_z \rangle}{R} \left[ 1 - \gamma_{*,R} - \gamma_{\langle v_R v_z \rangle, R} \right]
    \end{equation}


### 2. Expression for $F_R$








