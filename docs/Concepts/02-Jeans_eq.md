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



> **Symmetry Considerations** The integrals involving derivatives with respect to $p_R$ and $p_\phi$ vanish when multiplied by $p_z$ because $p_z$ acts as a constant relative to those partial derivatives during integration by parts, and the boundary terms at $p \to \pm\infty$ go to zero.

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


At last, I want to show the readers, how are we writing  Eq. ($\ref{eq:vert_Jeans}$) in velocity coordinates from Eq. ($\ref{eq:axisymm_cbe}$) which is written in generalized coordinate basis. This is **very important**.

## **Chain rule of Multivariable Calculus**

> To learn this topic more rigorously, check out this [playlist](https://youtube.com/playlist?list=PLBh2i93oe2qtErGZonmtjF73jFhibdGNw&si=h5MtiqnhtF83mpvi)

??? danger " Transformation from phase space to configuration space"

    We have, 

    $$ p_R \frac{\partial f}{\partial R} 
    + p_z \frac{\partial f}{\partial z} 
    + \left( \frac{p_\phi^2}{R^3} - \frac{\partial \Phi}{\partial R} \right) \frac{\partial f}{\partial p_R} 
    - \frac{\partial \Phi}{\partial z} \frac{\partial f}{\partial p_z} 
    = 0$$

    In the above equation, we have the partial derivatives wrt momentum coordinates. Our target is to transform them into velocity coordinates. 
 
    > **Problem Setup**

    Let us define

    - $\mathcal{P} = \mathrm{span} \{ ( \vb{x}, \vb{p}) | \vb{x}, \vb{p} \in \real^3\}$ as the phase space.
    - $\mathcal{C} =  \mathrm{span} \{ ( \vb{x}, \vb{v}) | \vb{x}, \vb{v} \in \real^3\}$ as the configuration space.

    We have, $f \to f(R, \phi, z, p_R, p_\phi , p_z) \equiv f( \vb{x}, \vb{p})$ as the _distribution function in phase space_ .

    $$ f : \mathcal{P} \to \real$$

    We define another function $h : \mathcal{C} \to \real$, as the _distribution function in configuration space_, such that $f$ and $h$ are numerically equal but they differ in the sense that they work in different domains. Furthermore, 

    $$ \nu (\vb{x}) = \int \dd ^3 \vb{p} f( \vb{x}, \vb{p}) = \int \dd ^3 \vb{v} h( \vb{x}, \vb{v})  $$

    Now, we would like to construct a function which takes a point in phase space and return it's corresponding point in configuration space, by the following map, 
    <center>
        $p_R = v_R$,  $p_{\phi} = R v_{\phi}$,  and $p_z = v_z$
    </center>
    In other words

    $$ ( \vb{x}, \vb{p}) \equiv (R, \phi, z, p_R, p_\phi , p_z) \mapsto (R, \phi, z, p_R, \frac{p_\phi}{R} , p_z) \equiv (\vb{x}, \vb{v}) $$ 

    > This is a **bijective** map!

    A natural choice is, 

    $$ g : \mathcal{P} \to \mathcal{C}$$

    But since both  $\mathcal{P} , \mathcal{C} \cong \real^6$. We can also write it as $g : \real^6 \to \real^6$.

    Ok!, now consider evaluation at some point in phase space $(\vb{x}_0, \vb{p}_0) \in \mathcal{P}$. Then
    
    \begin{align}
       g(\vb{x}_0, \vb{p}_0) &= (\vb{x}_0, \vb{v}_0) \\
       \text{also recall, } f(\vb{x}_0, \vb{p}_0) &= h(\vb{x}_0, \vb{v}_0) \\
       f(\vb{x}_0, \vb{p}_0) &= h(g(\vb{x}_0, \vb{p}_0))\\
       \implies f(\vb{x}_0, \vb{p}_0) &= h \circ g (\vb{x}_0, \vb{p}_0)\\
    \end{align}

    Since, this holds true for any arbitrary $(\vb{x}_0, \vb{p}_0) \in \mathcal{P}$, we can write

    $$ f = h \circ g $$

    Further, WLOG let's assume 
    
    - $f$ is (totally) differentiable at $(\vb{x}_0, \vb{p}_0)$
    - $h$ is (totally) differentiable at $g(\vb{x}_0, \vb{p}_0) = (\vb{x}_0, \vb{v}_0)$

    Then using the chain rule of multivariable calculus, we can write

    \begin{align*}
        f'(\vb{x}_0, \vb{p}_0) &= h'(g(\vb{x}_0, \vb{p}_0)) g'(\vb{x}_0, \vb{p}_0)\\
                            &= h'(\vb{x}_0, \vb{v}_0) g'(\vb{x}_0, \vb{p}_0)\\
                            \text{in Jacobian Matrix notation}\\ 
                            J_f (\vb{x}_0, \vb{p}_0) &= J_h (\vb{x}_0, \vb{v}_0) \cdot J_g (\vb{x}_0, \vb{p}_0)
    \end{align*}
    
    where

    $$ J_f (\vb{x}_0, \vb{p}_0) =  \bigg[ \pdv{f}{R} \ \pdv{f}{\phi} \ \dots \ \pdv{f}{p_\phi} \ \pdv{f}{p_z} \bigg]_{(\vb{x}_0, \vb{p}_0)}$$

    $$ J_h (\vb{x}_0, \vb{v}_0) =  \bigg[ \pdv{h}{R} \ \pdv{h}{\phi} \ \dots \ \pdv{h}{v_\phi} \ \pdv{h}{v_z} \bigg]_{(\vb{x}_0, \vb{v}_0)}$$

    hence, $J_g (\vb{x}_0, \vb{p}_0) \in M_6 (\real)$ (i.e a $6 \times 6$ square matrix in real field/ with real entries)

    $$
    J_g = \begin{pmatrix}
    \partial_R g_1 & \partial_\phi g_1 & \partial_z g_1 & \partial_{p_R} g_1 & \partial_{p_\phi} g_1 & \partial_{p_z} g_1 \\[0.5em]
    \partial_R g_2 & \partial_\phi g_2 & \partial_z g_2 & \partial_{p_R} g_2 & \partial_{p_\phi} g_2 & \partial_{p_z} g_2 \\[0.5em]
    \partial_R g_3 & \partial_\phi g_3 & \partial_z g_3 & \partial_{p_R} g_3 & \partial_{p_\phi} g_3 & \partial_{p_z} g_3 \\[0.5em]
    \partial_R g_4 & \partial_\phi g_4 & \partial_z g_4 & \partial_{p_R} g_4 & \partial_{p_\phi} g_4 & \partial_{p_z} g_4 \\[0.5em]
    \partial_R g_5 & \partial_\phi g_5 & \partial_z g_5 & \partial_{p_R} g_5 & \partial_{p_\phi} g_5 & \partial_{p_z} g_5 \\[0.5em]
    \partial_R g_6 & \partial_\phi g_6 & \partial_z g_6 & \partial_{p_R} g_6 & \partial_{p_\phi} g_6 & \partial_{p_z} g_6
    \end{pmatrix}
    $$

    $$\downarrow$$

    $$[J_g]_{ij} = \pdv{g_i}{X^j}$$
     
    > **Note** $g_i$ denotes the $i$-th component of $g$. 

    So, let's look at how $\pdv{f}{R}$ changes in the new representation. On simple matrix multiplication, the first component on LHS

    \begin{align}
        \bigg( \pdv{f}{R} \bigg)_{\vb{p}} &= \bigg( \pdv{h}{R} \bigg)_{\vb{v}} \bigg( \pdv{g_1}{R}\bigg) + \bigg( \pdv{h}{\phi} \bigg)_{\vb{v}} \bigg( \pdv{g_2}{R}\bigg) + \dots \\
        & \bigg( \pdv{h}{v_\phi} \bigg)_{\vb{v}} \bigg( \pdv{g_5}{R}\bigg) + \bigg( \pdv{h}{v_z} \bigg)_{\vb{v}} \bigg( \pdv{g_6}{R}\bigg)
    \end{align}

    Notice, the only nonzero elements of $J_g$ in the above equation are -

    \[ \pdv{g_1}{R} = \pdv{R}{R} = 1  \text{ and } \pdv{g_5}{R} = p_{\phi} \pdv{}{R} (1/R) = - \frac{v_{\phi}}{R}\]

    Therefore,

    \begin{equation}
        \boxed{\bigg( \pdv{f}{R} \bigg)_{\vb{p}} = \bigg( \pdv{h}{R} \bigg)_{\vb{v}} - \frac{v_{\phi}}{R} \bigg( \pdv{h}{v_\phi} \bigg)_{\vb{v}}}
    \end{equation}

    Likewise, it is straightforward to see (since the remaining are just identity maps)

    \begin{align}
        \bigg( \pdv{f}{z} \bigg)_{\vb{p}} &= \bigg( \pdv{h}{z} \bigg)_{\vb{v}} \\
        \bigg( \pdv{f}{p_R} \bigg)_{\vb{p}} &= \bigg( \pdv{h}{p_R} \bigg)_{\vb{v}} \\
        \bigg( \pdv{f}{p_z} \bigg)_{\vb{p}} &= \bigg( \pdv{h}{p_z} \bigg)_{\vb{v}} \\
        \bigg( \pdv{\Phi}{R} \bigg)_{\vb{p}} &= \bigg( \pdv{\Phi}{R} \bigg)_{\vb{v}} \\
    \end{align}

    So, the first term transforms in configuration space as

    \[ \frac{\partial (\nu \langle p_R p_z \rangle)}{\partial R} =  \int \dd^3\vb{p} \ p_z p_R \left( \frac{\partial f}{\partial R} \right)_{\vb{p}} \to \int \dd^3\vb{v} \ v_z v_R \bigg[  \bigg( \pdv{h}{R} \bigg)_{\vb{v}} - \frac{v_{\phi}}{R} \bigg( \pdv{h}{v_\phi} \bigg)_{\vb{v}} \bigg] = \frac{1}{R} \frac{\partial ( R \nu \langle v_R v_z \rangle)}{\partial R} \ \ \ \checkmark \]

    The rest of the terms evaluates in exactly the same way and we **finally** reach at Eq. ($\ref{eq:vert_Jeans}$). **Uff Babah!**

    $$ \frac{1}{R} \frac{\partial ( R \nu \langle v_R v_z \rangle)}{\partial R}  + \frac{\partial (\nu \langle v_z^2 \rangle)}{\partial z} + \nu \frac{\partial \Phi}{\partial z} = 0$$

    $$\boxed{}$$


